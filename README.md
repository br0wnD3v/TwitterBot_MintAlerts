# Steps to follow so that you can tailor the example to your specific needs.

## Step 0

- Run `yarn add` in both the frontend/ and backend/

## Step 1

- Go the backend folder, add the smart contract you want to track under contracts/
- Open the terminal and run `yarn hardhat compile`. This will generate the ABI which can be found under the artifacts/contracts/[NAME].json at the root of the backend folder.

## Step 2

- Pre-requisite : The contract should already exist on the chain you are trying to target. Therefore either deploy it using Remix IDE or Hardhat deployments.
- After done, open frontend/.
- Open the constants/info.js file and update the contract address and abi variables and add your contract's relevant info which can be found with the help of Step 1.2

## Step 3

- Add a .env file at the root of your frontend/ and add the 4 variables being imported as process.env.\* in the api/checkAndUpdate.js under pages/ (These are twitter api's keys generated with each developer account).

## Step 4

- After done with everything open your terminal and run `yarn dev`. This will start the server which will continue to listen for the event mentioned in the checkAndUpdate API endpoint for the application. (After running the webapp for the first time you need to call the endpoint with `POST` method to enable the listener which will keep it running until the server is active.)
- After you'll be done, anytime the `MintedToken` event (in this example. To change, edit the checkAndUpdate file and make sure you have the event definition in your contract's ABI too.) is emitted the server will call the twitter API and send the tweet congratulating the Twitter Handle mentioned in the event itself.

NOTE : If you wish to make the whole project autonomous you can deploy the app on vercel and send a POST request to its
API endpoint and it will ideally start the listener and will make sure everytime someone mints using your contract it will send a tweet to the recepient.
