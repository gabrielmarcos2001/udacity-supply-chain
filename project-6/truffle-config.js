const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "fa8e8813652049ee9966b96c47bfa4e1";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1652207530062" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
    },
  }
};