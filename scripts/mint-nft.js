require("dotenv").config()
const ethers = require("ethers")

const { ALCHEMY_API_KEY, METAMASK_API_KEY } = process.env
const {abi} = require("../artifacts/contracts/GameTicket.sol/GameTicket.json")

const contractAddr = "0x00fB2BEDD0af1289fBc2C606Dd3d192877b0572f"


const provider = new ethers.providers.AlchemyProvider("goerli", ALCHEMY_API_KEY)
const signer = new ethers.Wallet(METAMASK_API_KEY, provider)

const myNftContract = new ethers.Contract(contractAddr, abi, signer)

//Get the NFT metadata IPFS url
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmdHGJdaxywi2tSnDPFv3RagWSoDsdzgx76PtZR4HQQveY"

const mintNFT = async ()=> {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(()=> process.exit(0))
    .catch((err)=>{
        console.error(err)
        process.exit(1)
    })