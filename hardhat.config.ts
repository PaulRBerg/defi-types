/* eslint-disable @typescript-eslint/no-explicit-any */
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";

import overrides from "./src/overrides";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides,
  },
  typechain: {
    outDir: "dist",
    target: "ethers-v5",
  },
};

export default config;
