const main = async () => {

  const AvalancheNFT = await hre.ethers.getContractFactory("AvalancheNFT");
  const avalancheNFT = await AvalancheNFT.deploy("https://gateway.pinata.cloud/ipfs/QmbWrzGVL5ZM9G6fASoKGjfccLsocJ5aCPmbx1XmGJDPHm");

  await avalancheNFT.deployed();

  console.log("AvalancheNFT deployed to:", avalancheNFT.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

// contract address 0xe1975D27C0Edcb80431F5E384D888C28ff5e609d