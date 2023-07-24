# Smart Contract - Inbox

This repository contains a simple smart contract called "Inbox" written in Solidity. The contract allows you to store and update a message on the Ethereum blockchain. The smart contract is deployed on the Goerli test network using Infura, and there are also some tests written in JavaScript to ensure the contract functions correctly.

## Smart Contract Details

### Inbox.sol

The `Inbox.sol` file contains the Solidity code for the "Inbox" smart contract. The contract has the following functionalities:

1. **Constructor**: It takes an initial message as an argument and sets it as the default message.
2. **setMessage**: It allows updating the message to a new value.

### Inbox.test.js

The `Inbox.test.js` file contains test cases written in JavaScript using the Mocha testing framework and the `assert` library. The tests ensure that the smart contract behaves as expected and that the contract deployment is successful.

## Prerequisites

Before running the smart contract and tests, you need the following:

1. **Node.js**: Make sure you have Node.js installed on your machine.

2. **Truffle HDWallet Provider**: Install the `@truffle/hdwallet-provider` package for interacting with Ethereum networks.

## Running the Smart Contract

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command in the root folder of the project:


3. Configure `deploy.js`: Replace `'REPLACE_WITH_YOUR_MNEMONIC'` with your own mnemonic phrase, and `'REPLACE_WITH_YOUR_INFURA_URL'` with your Infura endpoint.

4. Deploy the contract by running the following command:


The contract will be deployed to the Goerli test network, and the contract address will be displayed in the console.

## Running the Tests

To run the tests, execute the following command:


The test script will deploy the contract using the Truffle HDWallet Provider and then run the test cases to ensure that the contract functions correctly.

## Contributing

If you find any issues with the smart contract or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy coding!
