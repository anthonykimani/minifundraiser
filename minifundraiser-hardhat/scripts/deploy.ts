import { createClients } from "./helpers";
import {
  abi,
  bytecode,
} from "../artifacts/contracts/Fundraiser.sol/Fundraiser.json";
import * as dotenv from "dotenv";
dotenv.config();

// imports Alchemy API key and metamask private key

const hre = require("hardhat");

async function main() {
  // const Fundraiser = await hre.ethers.deployContract("Fundraiser");

  // await Fundraiser.waitForDeployment();

  // console.log(`Deployed to Address: ${Fundraiser.target}`);

  // Get PublicClient and WalletClient from helpers
  const { deployer, publicClient } = createClients();

  //  use viem's deploycontract function to deploy
  console.log("\nDeploying Fundraiser contract");
  const hash = await deployer.deployContract({
    abi: abi,
    bytecode: bytecode as `0x${string}`,
    args: [],
  });

  // Get Contract Hash
  console.log("\nTransaction hash:", hash);
  console.log("Waiting for confirmations...");

  // Get Contract Address
  const txReceipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("\nFundraiser contract deployed to:", txReceipt.contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
