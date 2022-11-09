import { ethers } from "ethers";


export const connectWallet = async () => {
    if(!window.ethereum) return alert("No Metamask wallet found. Please install it!")

    await window.ethereum.send("eth_requestAccounts")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.on("network", (newNetwork, oldNetwork) => {
        if (oldNetwork) window.location.reload()
    }) 
    return provider
}

export const showWallet = async () => {
    const provider = await connectWallet()
    const accounts = provider.send("eth_requestAccount")
    return accounts
}

export const showBalance = async (address) => {
    const provider = await connectWallet()
    const balance = await provider.getBalance(address)
    return ethers.utils.formatEther(balance.toString())

}

export const transaction = async (toAddress) => {
    const provider = await connectWallet()
    const signer = provider.getSigner()

    ethers.utils.getAddress(toAddress)

    const tx = await signer.sendTransaction({
        to: toAddress, value: ethers.utils.parseEther("0.1")
    })

    return tx
}

//funções que o luiz criou: getMetamaskProvider, getBnbBalance, transferBnb