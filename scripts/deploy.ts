import { ethers } from "hardhat";
import { Greeter__factory } from "../typechain-types";

async function main() {
  const [owner] = await ethers.getSigners();
  const greeter = await new Greeter__factory(owner).deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
