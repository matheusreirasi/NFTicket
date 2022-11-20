require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { ALCHEMY_API_KEY, METAMASK_API_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork:"goerli",
  networks: {
    hardhat:{},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/" + ALCHEMY_API_KEY,
      accounts: [METAMASK_API_KEY]
    }
  }
};
