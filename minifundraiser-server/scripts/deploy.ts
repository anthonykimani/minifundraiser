import { ethers } from "hardhat";
require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const Fundraiser = await hre.ethers.deployContract("Fundraiser");

  await Fundraiser.waitForDeployment();
  

  console.log(`Deployed to Address: ${Fundraiser.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
