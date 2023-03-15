const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");



async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const kokArtsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  console.log(
    "CRYPTO_DEVS_NFT_CONTRACT_ADDRESS:",
    kokArtsNFTContract
  );

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const kokArtsTokenContract = await ethers.getContractFactory(
    "KokArtsToken"
  );

  // deploy the contract
  const deployedKokArtsTokenContract = await kokArtsTokenContract.deploy(
    kokArtsNFTContract
  );

  await deployedKokArtsTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "KokArts Token Contract Address:",
    deployedKokArtsTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });