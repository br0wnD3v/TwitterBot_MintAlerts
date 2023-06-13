require("dotenv").config();

import twitter from "twitter-lite";

import { ethers } from "ethers";

import {
  contractABI,
  contractAddresses,
  chainToRPC,
} from "../../constants/info.js";
const twitterConfig = {
  consumer_key: process.env.TWT_API_KEY,
  consumer_secret: process.env.TWT_API_SECRET,
  access_token_key: process.env.TWT_ACCESS_TOKEN,
  access_token_secret: process.env.TWT_ACCESS_SECRET,
};
const twitterClient = new twitter(twitterConfig);

const provider = new ethers.providers.JsonRpcProvider(chainToRPC["mumbai"]);

// Create an instance of your contract.
const contract = new ethers.Contract(
  contractAddresses["mumbai"],
  contractABI,
  provider
);

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    contract.off();
  }
  if (req.method == "POST") {
    try {
      // Set up the event listener
      contract.on("MintedToken", async (caller, twitterHandle) => {
        console.log("Caller:", caller);
        console.log("Twitter Handle:", twitterHandle, "\n");
        const tweetMessage = `Congratulations to ${twitterHandle} for minting an NFT at ${contractAddresses["mumbai"]}. For further details visit https://mumbai.polygonscan.com/address/${contractAddresses["mumbai"]}`;

        twitterClient
          .post("statuses/update", { status: tweetMessage })
          .then((result) => {
            console.log(
              'You successfully tweeted this : "' + result.text + '"'
            );
          })
          .catch(console.error);
      });

      res.status(200).json({ message: "Event listener started successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to start event listener." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
