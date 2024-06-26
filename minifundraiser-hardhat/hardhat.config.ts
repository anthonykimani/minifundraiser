import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
require("dotenv").config();

const { CELO_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [CELO_PRIVATE_KEY ?? ""],
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [CELO_PRIVATE_KEY ?? ""],
    },
  },
};

export default config;
