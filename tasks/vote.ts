import { task } from "hardhat/config";
import { config } from "../config";

task("vote", "Vote for proposal")
  .addParam("id", "Id of proposal")
  .addParam("supportsAgainst", "Vote for or against proposal")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const { id, supportsAgainst } = taskArgs;
    const [signer] = await ethers.getSigners();

    const dao = await ethers.getContractAt("DAO", config.DAO);

    if (supportsAgainst === "false") {
      await dao.vote(id, false);
      console.log(`${signer.address} voted against proposal with id ${id}`);
    } else if (supportsAgainst === "true") {
      await dao.vote(id, true);
      console.log(`${signer.address} voted for proposal with id ${id}`);
    }
  });
