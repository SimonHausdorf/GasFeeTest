require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  gasReporter: {
    // coinmarketcap: "xx",
    currency: "USD",
  },
  solidity: "0.8.3",
};
