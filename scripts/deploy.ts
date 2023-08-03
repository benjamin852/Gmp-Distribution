import { Wallet, getDefaultProvider, ethers } from "ethers";
import { deployContract } from "@axelar-network/axelar-local-dev";
import GMPDistributionAbi from "../artifacts/contracts/GMPDistribution.sol/GMPDistribution.json";
import MockERC20 from "../artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
import chains from "../chains.json";

async function main() {
  const evmChains = getEvmChains();

  const privateKey = process.env.PRIVATE_KEY;

  if (!privateKey) {
    throw new Error(
      "Invalid private key. Make sure the PRIVATE_KEY environment variable is set."
    );
  }

  const wallet = new Wallet(privateKey);

  for (const chain of evmChains) {
    const provider = getDefaultProvider(chain.rpc);
    const connectedWallet = wallet.connect(provider);
    const gmpDistribution = await deployContract(
      connectedWallet,
      GMPDistributionAbi,
      [chain.gateway, chain.gasService]
    );

    const mockERC20 = new ethers.Contract(
      chain.aUSDC,
      MockERC20.abi,
      connectedWallet
    );

    await mockERC20.approve(gmpDistribution.address, "1234567895");

    await console.log(
      `${chain.name} contract address: ${gmpDistribution.address}`
    );
  }
}

function getEvmChains() {
  return chains.map((chain) => ({ ...chain }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
