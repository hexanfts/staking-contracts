require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-web3');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');
require('hardhat-contract-sizer');
require('hardhat-abi-exporter');
require('solidity-coverage');
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: { mnemonic: process.env.MNEMONIC }
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: { mnemonic: process.env.MNEMONIC }
    }
  },
  namedAccounts: {
    owner: {
      default: 0,
      mainnet: '',
      testnet: ''
    },
    eightPayToken: {
      default: 1,
      mainnet: '',
      testnet: ''
    },
    lpToken: {
      default: 2,
      mainnet: '',
      testnet: ''
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_KEY
  }
};
