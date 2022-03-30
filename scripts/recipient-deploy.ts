import { ethers } from "hardhat";
import { Recipient__factory } from "../typechain-types";

async function main() {
  const [signer] = await ethers.getSigners();
  const recipient = await new Recipient__factory(signer).deploy();

  await recipient.deployed();

  console.log("Recipient deployed to:", recipient.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
