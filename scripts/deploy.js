const hre = require("hardhat")


async function main() {
  const GameTicket = await hre.ethers.getContractFactory("GameTicket");

  const gameTicket = await GameTicket.deploy();

  
  console.log("Contract deployed to address:", gameTicket.address);
}

main()
  .then(()=>process.exit(0))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
