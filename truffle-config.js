const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // rinkeby : {
    //   provider : function(){
    //     return new HDWalletProvider("")
    //   },
    //   network_id :4,
    //   gas : 4500000
    // },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  }
};
