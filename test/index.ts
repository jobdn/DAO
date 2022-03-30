import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BytesLike, constants, utils } from "ethers";
import { ethers, network } from "hardhat";
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
  let acc2: SignerWithAddress;
  let dao: DAO;
  let token: ERC20;
  let recipient: Recipient;
  const MIN_QUORUM = 1000;
  const DURATION = 600; // 10 minutes
  const PROPOSAL_FINISHED = 0;
  const PROPOSAL_STARTED = 1;

  beforeEach(async () => {
    [owner, acc1, acc2] = await ethers.getSigners();
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
        expect(await token.balanceOf(dao.address)).to.eq(depositSum);

        // cheking
        const voter = await dao.voters(owner.address);
        expect(voter.amount).to.eq(depositSum);
        expect(voter.lastDeposit).to.eq(i);
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

  interface ProposalItem {
    num: number;
    description: string;
  }
  const proposals: ProposalItem[] = [
    { num: 1, description: "Proposal #1" },
    { num: 2, description: "Proposal #2" },
    { num: 3, description: "Proposal #3" },
  ];

  // HELPERS ===================================================================
  const addProposal = async (
    propDesc: string,
    propNum: number,
    signer: SignerWithAddress = owner
  ) => {
    const RECIPIEND_ABI_PART =
      "function changeData(uint256 _value, string memory _message) external";
    const iface = new utils.Interface([RECIPIEND_ABI_PART]);

    const callData: BytesLike = iface.encodeFunctionData("changeData", [
      propNum,
      propDesc,
    ]);
    // proposal adding
    await dao
      .connect(signer)
      .addProposal(callData, recipient.address, propDesc);

    expect((await dao.proposals(propNum)).id).to.eq(propNum);
    expect((await dao.proposals(propNum)).callData).to.eq(callData);
    expect((await dao.proposals(propNum)).recipient).to.eq(recipient.address);
    expect((await dao.proposals(propNum)).description).to.eq(
      utils.formatBytes32String(propDesc)
    );
    expect((await dao.proposals(propNum)).voteCount).to.eq(0);
    expect((await dao.proposals(propNum)).quorumCount).to.eq(0);
    expect((await dao.proposals(propNum)).status).to.eq(PROPOSAL_STARTED);
  };

  const makeDeposit = async (
    depositAmount: number,
    signer: SignerWithAddress = owner
  ) => {
    await token.mint(signer.address, depositAmount);
    await token.connect(signer).approve(dao.address, depositAmount);
    await dao.connect(signer).deposit(depositAmount);
  };

  const depositAndVote = async (
    depositAmount: number,
    id: number,
    supportedAgainst: boolean,
    signer: SignerWithAddress = owner
  ) => {
    await makeDeposit(depositAmount, signer);

    await dao.connect(signer).vote(id, supportedAgainst);
  };
  // HELPERS ===================================================================

  describe("Add proposal", () => {
    it("should be possible to add proposal", async () => {
      for (const prop of proposals) {
        await addProposal(prop.description, prop.num);
      }
    });

    it("should be fail not chairperson trying to add proposal", async () => {
      await expect(
        addProposal(proposals[0].description, proposals[0].num, acc1)
      ).to.be.revertedWith("DAO: not chairperson");
    });
  });

  describe("Vote", async () => {
    it("should be possible to vote for proposal", async () => {
      await addProposal(proposals[0].description, proposals[0].num);

      await depositAndVote(1000, proposals[0].num, true);
      await depositAndVote(100, proposals[0].num, true);

      await depositAndVote(200, proposals[0].num, false, acc1);
      await depositAndVote(100, proposals[0].num, false, acc2);

      await depositAndVote(100, proposals[0].num, false, acc2);
      await depositAndVote(200, proposals[0].num, false, acc1);

      const propsal = await dao.proposals(proposals[0].num);
      expect(propsal.voteCount).to.eq(500);
      expect(propsal.quorumCount).to.eq(1700);
    });

    it("should be fail if voter trying to vote for non existent proposal", async () => {
      await expect(
        depositAndVote(1000, proposals[0].num, true)
      ).to.be.revertedWith("DAO: not existent proposal");
    });

    it("should be fail if voter trying to vote after finishing of proposal", async () => {
      await addProposal(proposals[0].description, proposals[0].num);

      await network.provider.send("evm_increaseTime", [DURATION]);
      await network.provider.send("evm_mine");

      await expect(
        depositAndVote(1000, proposals[0].num, true)
      ).to.be.revertedWith("DAO: period of voting is over");
    });
  });

  describe("Proposal finish", () => {
    it("should be finish successful proposal", async () => {
      await addProposal(proposals[0].description, proposals[0].num);
      await depositAndVote(1000, proposals[0].num, true);
      await depositAndVote(200, proposals[0].num, false, acc1);
      await depositAndVote(100, proposals[0].num, false, acc2);
      await depositAndVote(200, proposals[0].num, false, acc1);

      await network.provider.send("evm_increaseTime", [DURATION]);
      await network.provider.send("evm_mine");

      await dao.finishProposal(proposals[0].num);
      const proposal = await dao.proposals(proposals[0].num);
      expect(proposal.status).to.eq(PROPOSAL_FINISHED);
      expect(await recipient.receivedValue()).to.eq(proposals[0].num);
      expect(await recipient.receivedMessage()).to.eq(proposals[0].description);
    });

    it("should be finish not successful proposal", async () => {
      await addProposal(proposals[0].description, proposals[0].num);
      await depositAndVote(100, proposals[0].num, true);
      await depositAndVote(2000, proposals[0].num, false, acc1);

      await network.provider.send("evm_increaseTime", [DURATION]);
      await network.provider.send("evm_mine");

      // finish
      await dao.finishProposal(proposals[0].num);
      const proposal = await dao.proposals(proposals[0].num);
      // check
      expect(proposal.status).to.eq(PROPOSAL_FINISHED);
      expect(await recipient.receivedValue()).to.eq(0);
      expect(await recipient.receivedMessage()).to.eq("");
    });

    it("should be fail if proposal period isn't over yet", async () => {
      await addProposal(proposals[0].description, proposals[0].num);
      await expect(dao.finishProposal(proposals[0].num)).to.be.revertedWith(
        "DAO: period of voting isn't over"
      );
    });

    it("should be fail if callData is wrong", async () => {
      const RECIPIEND_ABI_PART =
        "function WRONG_changeData(uint256 _value, string memory _message) external";
      const iface = new utils.Interface([RECIPIEND_ABI_PART]);

      // create wrong calldata
      const callData: BytesLike = iface.encodeFunctionData("WRONG_changeData", [
        proposals[0].num,
        proposals[0].description,
      ]);
      // proposal adding
      await dao.addProposal(
        callData,
        recipient.address,
        proposals[0].description
      );

      await depositAndVote(1000, proposals[0].num, true);
      await depositAndVote(200, proposals[0].num, false, acc1);
      await depositAndVote(100, proposals[0].num, false, acc2);
      await depositAndVote(200, proposals[0].num, false, acc1);

      await network.provider.send("evm_increaseTime", [DURATION]);
      await network.provider.send("evm_mine");

      // finish
      await expect(dao.finishProposal(proposals[0].num)).to.be.revertedWith(
        "DAO: call fails"
      );
    });
  });

  describe("With draw tokens", () => {
    it("should be possible to withdraw tokens", async () => {
      await addProposal(proposals[0].description, proposals[0].num);

      await depositAndVote(2000, proposals[0].num, true);

      await network.provider.send("evm_increaseTime", [60]);
      await network.provider.send("evm_mine");

      await addProposal(proposals[1].description, proposals[1].num);
      await dao.vote(proposals[1].num, true);

      await network.provider.send("evm_increaseTime", [DURATION]);
      await network.provider.send("evm_mine");

      await dao.withdrawTokens();
      expect(await token.balanceOf(owner.address)).to.eq(2000);
    });

    it("should be fail if sender trying to withdraw tokens too early", async () => {
      await addProposal(proposals[0].description, proposals[0].num);
      await depositAndVote(2000, proposals[0].num, true);
      await expect(dao.withdrawTokens()).to.be.revertedWith(
        "DAO: last voting period isn't over"
      );
    });
  });
});
