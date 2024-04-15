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
const { CELO_SCAN_API_KEY, METAMASK_PRIVATE_KEY } = process.env;

export function createClients() {
  const httpTransport = http(
    `https://api-alfajores.celoscan.io/api?apikey=${CELO_SCAN_API_KEY ?? ""}`
  );

  const publicClient = createPublicClient({
    chain: chains.celoAlfajores,
    transport: httpTransport,
  });

  // Creates an Account from a private key.
  const account = privateKeyToAccount(`0x${METAMASK_PRIVATE_KEY ?? ""}`);

  // create a walletClient
  const deployer = createWalletClient({
    account,
    chain: chains.celoAlfajores,
    transport: httpTransport,
  });

  return { publicClient, deployer };
}
