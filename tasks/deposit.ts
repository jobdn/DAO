import { task } from "hardhat/config";
import { config } from "../config";

task("deposit", "Make deposit for voting to dao")
  .addParam("amount", "Amount of token to vote")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const [signer] = await ethers.getSigners();
    const { amount } = taskArgs;

    // const token = await ethers.getContractAt("ERC20", config.VOTE_TOKEN);
    const dao = await ethers.getContractAt("DAO", config.DAO);
    // await token.approve(dao.address, amount);

    await dao.deposit(amount);

    console.log(`${signer.address} sended ${amount} to dao ${dao.address}`);
  });
