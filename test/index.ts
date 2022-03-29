import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BytesLike, constants, utils } from "ethers";
import { ethers } from "hardhat";
import {
  DAO,
  DAO__factory,
  Recipient,
  Recipient__factory,
} from "../typechain-types";
import { ERC20 } from "../typechain-types/contracts/token";
import { ERC20__factory } from "../typechain-types/factories/contracts/token";

describe("DAO", function () {
  let owner: SignerWithAddress;
  let acc1: SignerWithAddress;
  let dao: DAO;
  let token: ERC20;
  let recipient: Recipient;
  const MIN_QUORUM = 100;
  const DURATION = 600; // 10 minutes

  beforeEach(async () => {
    [owner, acc1] = await ethers.getSigners();
    token = await new ERC20__factory(owner).deploy("TOKEN", "TKN", 2);
    dao = await new DAO__factory(owner).deploy(
      owner.address,
      token.address,
      MIN_QUORUM,
      DURATION
    );
    recipient = await new Recipient__factory(owner).deploy();

    await expect(
      new DAO__factory(owner).deploy(
        constants.AddressZero,
        token.address,
        MIN_QUORUM,
        DURATION
      )
    ).to.be.revertedWith("DAO: error of chairperson|token");

    await expect(
      new DAO__factory(owner).deploy(
        owner.address,
        constants.AddressZero,
        MIN_QUORUM,
        DURATION
      )
    ).to.be.revertedWith("DAO: error of chairperson|token");
  });

  describe("DAO deployment", () => {
    it("should be proper address of the dao", async () => {
      expect(dao.address).to.be.properAddress;
      expect(await dao._chairperson()).to.eq(owner.address);
      expect(await dao._token()).to.eq(token.address);
      expect(await dao._minimumQuorum()).to.eq(MIN_QUORUM);
      expect(await dao._duration()).to.eq(DURATION);
    });
  });

  describe("Deposit", () => {
    it("should be possible make deposit", async () => {
      // mint and approve
      await token.mint(owner.address, 1000);
      await token.approve(dao.address, 1000);

      let depositSum = 0;
      for (const i of [100, 200, 300, 400]) {
        // deposit
        await dao.deposit(i);
        depositSum += i;

        // cheking
        const voter = await dao.voters(owner.address);
        expect(voter.amount).to.eq(depositSum);
      }
      expect((await dao.voters(owner.address)).lastVotingTime).to.eq(0);
      expect((await dao.voters(owner.address)).exists).to.eq(true);
    });

    it("should fail if amount equals to 0", async () => {
      // mint and approve
      await token.mint(owner.address, 1000);
      // deposit
      await expect(dao.deposit(0)).to.be.revertedWith("DAO: zero amount");
      expect((await dao.voters(owner.address)).lastVotingTime).to.eq(0);
      expect((await dao.voters(owner.address)).exists).to.eq(false);
    });
  });

  describe("Add proposal", () => {
    it("should be possible to add proposal", async () => {
      const RECIPIEND_ABI_PART =
        "function changeData(uint256 _value, string memory _message) external";
      const iface = new utils.Interface([RECIPIEND_ABI_PART]);
      interface ProposalItem {
        num: number;
        description: string;
      }
      const proposals: ProposalItem[] = [
        { num: 1, description: "Proposal #1" },
        { num: 2, description: "Proposal #2" },
        { num: 3, description: "Proposal #3" },
      ];

      let callData: BytesLike;
      for (const prop of proposals) {
        // calldata creating
        callData = iface.encodeFunctionData("changeData", [
          prop.num,
          prop.description,
        ]);
        // proposal adding
        await dao.addProposal(callData, recipient.address, prop.description);
      }

      describe("Add propsal fail", () => {
        it("should be fail not chairperson trying to add proposal", async () => {
          callData = iface.encodeFunctionData("changeData", [
            proposals[0].num,
            proposals[0].description,
          ]);
          await expect(
            dao
              .connect(acc1)
              .addProposal(
                callData,
                recipient.address,
                proposals[0].description
              )
          ).to.be.revertedWith("DAO: not chairperson");
        });
      });
    });
  });
});
