import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../constants/info.js";

export default async function handler(req, res) {
  if (req.method === "UPDATE") {
    try {
      // Connect to the Arbitrum network
      const provider = new ethers.providers.JsonRpcProvider(
        "https://arb1.arbitrum.io/rpc"
      );

      // Create an instance of your Arbitrum contract
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      // Set up the event listener
      contract.on("ChallengeSolved", (receiver, sender, twitterHandle) => {
        console.log("Twitter:", twitterHandle);
      });

      // Start listening for events
      contract.start();

      res.status(200).json({ message: "Event listener started successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to start event listener." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
