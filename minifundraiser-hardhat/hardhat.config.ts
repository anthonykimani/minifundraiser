import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
require("dotenv").config();

const { METAMASK_PRIVATE_KEY, CELO_SCAN_API_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [METAMASK_PRIVATE_KEY ?? ""],
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [METAMASK_PRIVATE_KEY ?? ""],
    },
  },
  etherscan: {
    apiKey: {
      alfajores: CELO_SCAN_API_KEY ?? "",
    },
    customChains: [
      {
        network: "alfajores",
        chainId: 44787,
        urls: {
          apiURL: "https://api-alfajores.celoscan.io/api",
          browserURL: "https://alfajores.celoscan.io/",
        },
      },
    ],
  },
};

export default config;
