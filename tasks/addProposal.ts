import { task } from "hardhat/config";
import { config } from "../config";

task("addProopsal", "Chairperson can add proposal")
  .addParam("callData", "Calldata to call function of another contract")
  .addParam("recipient", "Address of the contract whose function is called")
  .addParam("desc", "Proposal description")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { callData, recipient, desc } = taskArgs;

    const dao = await ethers.getContractAt("DAO", config.DAO);

    await dao.addProposal(callData, recipient, desc);

    console.log(
      `Proposal with description ${desc} and calldata ${callData} is added`
    );
  });
