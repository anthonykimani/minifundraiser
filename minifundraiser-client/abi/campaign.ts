export const campaignABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "campaigns",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "campaignName",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "targetAmount",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "campaignAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "campaignDeadline",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountRaised",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "numFunders",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_campaignName",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_targetAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_campaignAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_campaignDeadline",
        "type": "uint256"
      }
    ],
    "name": "createCampaign",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "campaignId",
        "type": "uint256"
      }
    ],
    "name": "fundCampaign",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
] as const
