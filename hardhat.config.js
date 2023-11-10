require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  networks: {
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/dQpNrDisq5c4eiYb4FHGwIk4Beb3LLZz`,
      accounts: [`91ab203fe04fff978fd07fe183ad1f2164eb41a8546898f9890edba3c9d23771`],
      gasPrice: 15000000000, // specify gas price as per requirement
    },
    // ... other network configurations (rinkeby, ropsten, etc.)
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.8.20",
      }
    ],
  }
  // rest of the config
};

