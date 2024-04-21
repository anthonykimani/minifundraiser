import hre from "hardhat";
import {
  toHex,
  createPublicClient,
  http,
  createWalletClient,
  formatEther,
} from "viem";
import * as chains from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import * as dotenv from "dotenv";
dotenv.config();

// imports Alchemy API key and metamask private key
const { METAMASK_PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

export function createClients() {
  const httpTransport = http(
    `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY ?? ""}`
  );

  const publicClient = createPublicClient({
    chain: chains.sepolia,
    transport: httpTransport,
  });

  const getPublicClient = hre.viem.getPublicClient();

  // Creates an Account from a private key.
  const account = privateKeyToAccount(`0x${METAMASK_PRIVATE_KEY ?? ""}`);

  // create a walletClient
  const deployer = createWalletClient({
    account: account,
    chain: chains.sepolia,
    transport: httpTransport,
  });

  return { publicClient, deployer };
}
