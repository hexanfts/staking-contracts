const { ethers, getNamedAccounts } = require('hardhat');

async function main () {
  const { owner, eightPayToken, lpToken } = await getNamedAccounts();

  const START_BLOCK = 8124750;
  const END_BLOCK = 8988750;
  const REWARD_PER_BLOCK = ethers.utils.parseEther('1');

  const StakePool = await ethers.getContractFactory('StakePool');

  const stakePool = await StakePool.deploy(
    lpToken,
    eightPayToken,
    START_BLOCK,
    END_BLOCK,
    REWARD_PER_BLOCK
  );

  await stakePool.transferOwnership(owner);

  console.log(`StakePool: ${stakePool.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
