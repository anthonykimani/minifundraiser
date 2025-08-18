# Minifundraiser

Minifundraiser is a decentralized crowdfunding application built on the Celo blockchain. It allows users to create fundraising campaigns, accept donations in cryptocurrency, and manage their campaigns in a transparent and secure way. This project is designed to showcase a full-stack dApp with a Next.js frontend and a Solidity smart contract backend.

## Features

- **Create Fundraising Campaigns:** Users can easily create a new campaign by providing a name, description, target amount, and deadline.
- **Donate to Campaigns:** Anyone can donate to a campaign using their cryptocurrency wallet.
- **View Campaign Details:** View detailed information about each campaign, including the current amount raised, the number of donors, and the campaign deadline.
- **Featured and Verified Campaigns:** The platform can highlight featured and verified campaigns to give them more visibility.
- **Wallet Integration:** The application integrates with WalletConnect, allowing users to connect their wallets to interact with the dApp.

## Tech Stack

### Frontend (minifundraiser-client)

- [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static web applications.
- [TypeScript](https://www.typescriptlang.org/) - Statically typed superset of JavaScript.
- [Ethers.js](https://ethers.io/) - A complete Ethereum wallet implementation and utilities in JavaScript and TypeScript.
- [Wagmi](https://wagmi.sh/) - React Hooks for Ethereum.
- [Viem](https://viem.sh/) - A lightweight, composable, and type-safe library for interacting with Ethereum.
- [React Query](https://tanstack.com/query/v5) - For data fetching, caching, and state management.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [WalletConnect](https://walletconnect.com/) - Protocol to connect mobile wallets to dApps.

### Backend (minifundraiser-hardhat)

- [Solidity](https://soliditylang.org/) - The programming language for writing smart contracts on Ethereum-compatible blockchains.
- [Hardhat](https://hardhat.org/) - A development environment to compile, deploy, test, and debug your Ethereum software.
- [OpenZeppelin Contracts](https://www.openzeppelin.com/contracts) - A library for secure smart contract development.

## Project Structure

The project is organized into two main directories:

- `minifundraiser-client/`: Contains the Next.js frontend application.
- `minifundraiser-hardhat/`: Contains the Solidity smart contract and Hardhat development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/anthonykimani/minifundraiser.git
    cd minifundraiser
    ```

2.  **Set up the backend (smart contract):**

    Navigate to the `minifundraiser-hardhat` directory and install the dependencies:

    ```bash
    cd minifundraiser-hardhat
    npm install
    ```

    Compile the smart contract:

    ```bash
    npx hardhat compile
    ```

    Deploy the smart contract to your local network or a testnet. For a local network, run:

    ```bash
    npx hardhat node
    ```

    In a separate terminal, deploy the contract:

    ```bash
    npx hardhat run scripts/deploy.ts --network localhost
    ```

    Take note of the deployed contract address.

3.  **Set up the frontend (client):**

    Navigate to the `minifundraiser-client` directory and install the dependencies:

    ```bash
    cd ../minifundraiser-client
    npm install
    ```

    Create a `.env.local` file by copying the `.env.example`:

    ```bash
    cp .env.example .env.local
    ```

    Open `.env.local` and add your WalletConnect Project ID:

    ```
    NEXT_PUBLIC_PROJECT_ID=your_wallet_connect_project_id
    ```

    You can get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/).

    You will also need to update the smart contract address in the client application. The address is located in `minifundraiser-client/src/config/index.tsx`.

4.  **Run the application:**

    Once both the backend and frontend are set up, you can run the development server for the client:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Testing

To run the tests for the smart contract, navigate to the `minifundraiser-hardhat` directory and run:

```bash
npx hardhat test
```

## Deployed Smart Contract

The `Fundraiser.sol` smart contract is deployed on the Sepolia testnet at the following address:

[0xc7f15c6d31a993496c23888559d31acbd159c8b0](https://sepolia.etherscan.io/address/0xc7f15c6d31a993496c23888559d31acbd159c8b0)

## Author

- **Anthony Kimani** - [GitHub](https://github.com/anthonykimani)
