module.exports = {
  compilers: {
    solc: {
      version: "0.4.24",
      //docker: true,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 7984452,
      gasPrice: 2000000000,
    },
  },
  contracts_build_directory: "./client/src/build",
};

// module.exports = {
// Uncommenting the defaults below
// provides for an easier quick-start with Ganache.
// You can also follow this format for other networks;
// see <http://truffleframework.com/docs/advanced/configuration>
// for more details on how to specify configuration options!
//
//networks: {
//  development: {
//    host: "127.0.0.1",
//    port: 7545,
//    network_id: "*"
//  },
//  test: {
//    host: "127.0.0.1",
//    port: 7545,
//    network_id: "*"
//  }
//}
//
// };
