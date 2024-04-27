/* eslint-disable no-undef */
module.exports = {
  contracts_directory: "./src/lib/truffle/contracts",
  contracts_build_directory: "./src/lib/truffle/build",
  migrations_directory: "./src/lib/truffle/migrations",
  test_directory: "./src/lib/truffle/test",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    }
  },

  compilers: {
    solc: {
      version: "0.8.21"
    }
  }
};
