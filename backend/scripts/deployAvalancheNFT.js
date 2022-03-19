const hre = require("hardhat");

async function main() {

  const AvalancheNFT = await hre.ethers.getContractFactory("AvalancheNFT");
  const avalancheNFT = await AvalancheNFT.deploy();

  await avalancheNFT.deployed();

  console.log("AvalancheNFT deployed to:", avalancheNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// contract address 0xe7eD8AB49aeA19177c510b2F313C330b8d0a78b1