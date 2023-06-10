export const contractAddress = "0x39338138414Df90EC67dC2EE046ab78BcD4F56D9";
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
];
