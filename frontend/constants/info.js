export const contractAddresses = {
  mumbai: "0xb12f8d4C798d05c885D607E7b04D959cd7EdA63F",
  arbiturm: "0x39338138414Df90EC67dC2EE046ab78BcD4F56D9",
};

export const contractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "challengeContract",
        type: "address",
      },
    ],
    name: "addChallenge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "twitterHandle",
        type: "string",
      },
    ],
    name: "mintNft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "solver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "challenge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "twitterHandle",
        type: "string",
      },
    ],
    name: "ChallengeSolved",
    type: "event",
  },
];

export const chainToRPC = {
  mumbai: "https://rpc-mumbai.maticvigil.com",
  mainnet: "https://mainnet.infura.io/v3/",
  arbitrum: "https://arb1.arbitrum.io/rpc",
};
