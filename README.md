# Steps to follow so that you can tailor the example to your specific needs.

## Step 0

- Run `yarn add` in both the frontend/ and backend/

## Step 1

- Go the backend folder, remove all files under contracts/
- Add your smart contract file you want to track.
- Open terminal and run `yarn hardhat compile`. This will generate the ABI which can be found under the artifacts/ folder at the root of the backend folder.

## Step 2

- Pre-requisite : The contract should already exist on the chain you are trying to target. Therefore either deploy it using Remix IDE or Hardhat deployments.
- After done, open frontend/.
- Open the constants/info.js file and update the contract address and abi variables and add your contract's relevant info.

## Step 3

- Add a .env file at the root of your frontend/ and add the 4 variables being called as process.env.\* (These are r required for the twitter api).

## Step 4

- After done with everything open your terminal and run `yarn dev`. This will start the server which will continue to listen for the event mentioned in the checkAndUpdate API endpoint for the application. (After running the webapp for the first time you need to call the endpoint with POST method to enable the listener and keep it running until the server is active.)
- After you'll be done, anytime the `ChallengeSolved` event in this example is emitted the server will call the twitter API and send the tweet congratulating the Twitter Handle mentioned in the event itself.
