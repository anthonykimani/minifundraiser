import { ethers } from "hardhat";
require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const Fundraiser = await hre.ethers.getContractFactory("Fundraiser");

  const fundraiser = await Fundraiser.deploy();

  console.log(`Deployed to Address: ${fundraiser.address}`);

  await fundraiser.waitForDeployment();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
