import { ethers } from "hardhat";
import { config } from "../config";
import { DAO__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const dao = await new DAO__factory(signer).deploy(
    signer.address,
    config.VOTE_TOKEN,
    config.MININUM_QUORUM,
    config.DURATION
  );

  await dao.deployed();

  console.log("DAO deployed to:", dao.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
