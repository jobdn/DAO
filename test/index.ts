import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { constants, utils } from "ethers";
import { ethers } from "hardhat";
import { DAO, DAO__factory } from "../typechain-types";
import { ERC20 } from "../typechain-types/contracts/token";
import { ERC20__factory } from "../typechain-types/factories/contracts/token";

describe("DAO", function () {
  let owner: SignerWithAddress;
  let dao: DAO;
  let token: ERC20;
  const MIN_QUORUM = 100;
  const DURATION = 600; // 10 minutes

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    token = await new ERC20__factory(owner).deploy("TOKEN", "TKN", 2);
    dao = await new DAO__factory(owner).deploy(
      owner.address,
      token.address,
      MIN_QUORUM,
      DURATION
    );

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
      expect(await dao._chainperson()).to.eq(owner.address);
      expect(await dao._token()).to.eq(token.address);
      expect(await dao._minimumQuorum()).to.eq(MIN_QUORUM);
      expect(await dao._duration()).to.eq(DURATION);
    });
  });

  describe("Deposit", () => {
    it("should be possible make deposit", async () => {
      // mint and approve
      await token.mint(owner.address, utils.parseEther("1"));
      await token.approve(dao.address, utils.parseEther("1"));

      // deposit
      await dao.deposit(utils.parseEther("0.1"));

      // cheking
      const voter = await dao.voters(owner.address);
      expect(voter.amount).to.eq(utils.parseEther("0.1"));
      expect(voter.lastVotingTime).to.eq(0);
    });
  });
});
