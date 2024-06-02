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
const { METAMASK_PRIVATE_KEY, ALCHEMY_API_KEY, INFURA_API_KEY, CELO_PRIVATE_KEY } =
  process.env;

export function createClients() {
  // Transport for eth-sepolia network
  const sepoliaHttpTransport = http(
    `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY ?? ""}`
  );

  // Transport for celo alfajores network
  const celoAlfajoresHttpTransport = http(
    `https://celo-alfajores.infura.io/v3/${INFURA_API_KEY ?? ""}`
  );

  // Creates a publicClient
  const publicClient = createPublicClient({
    chain: chains.liskSepolia,
    transport: sepoliaHttpTransport,
  });

  // Creates an Account from a private key.
  const account = privateKeyToAccount(`0x${METAMASK_PRIVATE_KEY ?? ""}`);

  // create a walletClient
  const deployer = createWalletClient({
    account: account,
    chain: chains.liskSepolia,
    transport: sepoliaHttpTransport,
  });

  return { publicClient, deployer };
}
