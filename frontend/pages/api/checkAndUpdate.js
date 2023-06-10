require("dotenv").config();

import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../constants/info.js";
import Twit from "twit";

const T = new Twit({
  consumer_key: process.env.TWT_API_KEY,
  consumer_secret: process.env.TWT_API_SECRET,
  access_token: process.env.TWT_ACCESS_TOKEN,
  access_token_secret: process.env.TWT_ACCESS_SECRET,
});

const provider = new ethers.providers.JsonRpcProvider(
  "https://arb1.arbitrum.io/rpc"
);

// Create an instance of your Arbitrum contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    contract.stop();
  }
  if (req.method == "UPDATE") {
    try {
      // Set up the event listener
      contract.on(
        "ChallengeSolved",
        async (receiver, sender, twitterHandle) => {
          console.log("Twitter Handle:", twitterHandle);
          const tweetContent = `Congratulations to @${twitterHandle} as they are being rewarded an exclusive NFT on @Arbitrum which was made available after completing a series of challenges. Special thanks to @CyfrinAudits for making this happen! :)`;

          try {
            const response = await T.post("statuses/update", {
              status: tweetContent,
            });

            res.status(200).json({ message: "Tweet posted successfully!" });
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to post tweet." });
          }
        }
      );

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
