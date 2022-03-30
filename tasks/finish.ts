import { task } from "hardhat/config";
import { config } from "../config";

task("finish", "Finish proposal")
  .addParam("id", "Id of finished proposal")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { id } = taskArgs;

    const dao = await ethers.getContractAt("DAO", config.DAO);

    await dao.finishProposal(id);
    const proposal = await dao.proposals(id);

    console.log(
      `Proposal with id ${id} and description ${proposal.description} is finished`
    );
  });
