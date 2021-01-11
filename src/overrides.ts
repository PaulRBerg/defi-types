import { SolcUserConfig } from "hardhat/types";

const dapphub = {
  version: "0.4.23",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

const maker = {
  version: "0.5.12",
  settings: {
    optimizer: {
      enabled: false,
    },
  },
};

const uniswapV2Core = {
  version: "0.5.16",
  settings: {
    optimizer: {
      enabled: true,
      runs: 999999,
    },
  },
};

const uniswapV2Periphery = {
  version: "0.6.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 999999,
    },
  },
};

const wbtc = {
  version: "0.4.24",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

const overrides: Record<string, SolcUserConfig> = {
  "contracts/dapphub/WETH9.sol": dapphub,
  "contracts/maker/Dai.sol": maker,
  "contracts/maker/LibNote.sol": maker,
  "contracts/uniswap-v2/core/IERC20.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/IUniswapV2Callee.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/IUniswapV2ERC20.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/IUniswapV2Factory.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/IUniswapV2Pair.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/Math.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/SafeMath.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/UniswapV2ERC20.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/UniswapV2Pair.sol": uniswapV2Core,
  "contracts/uniswap-v2/core/UQ112x112.sol": uniswapV2Core,
  "contracts/uniswap-v2/periphery/IERC20.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/IUniswapV2Factory.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/IUniswapV2Pair.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/IUniswapV2Router01.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/IUniswapV2Router02.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/IWETH.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/SafeMath.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/TransferHelper.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/UniswapV2Library.sol": uniswapV2Periphery,
  "contracts/uniswap-v2/periphery/UniswapV2Router02.sol": uniswapV2Periphery,
  "contracts/wbtc/BasicToken.sol": wbtc,
  "contracts/wbtc/BurnableToken.sol": wbtc,
  "contracts/wbtc/CanReclaimToken.sol": wbtc,
  "contracts/wbtc/Claimable.sol": wbtc,
  "contracts/wbtc/DetailedERC20.sol": wbtc,
  "contracts/wbtc/ERC20.sol": wbtc,
  "contracts/wbtc/ERC20Basic.sol": wbtc,
  "contracts/wbtc/MintableToken.sol": wbtc,
  "contracts/wbtc/Ownable.sol": wbtc,
  "contracts/wbtc/OwnableContract.sol": wbtc,
  "contracts/wbtc/Pausable.sol": wbtc,
  "contracts/wbtc/PausableToken.sol": wbtc,
  "contracts/wbtc/SafeERC20.sol": wbtc,
  "contracts/wbtc/SafeMath.sol": wbtc,
  "contracts/wbtc/StandardToken.sol": wbtc,
  "contracts/wbtc/WBTC.sol": wbtc,
};

export default overrides;
