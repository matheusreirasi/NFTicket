import React from 'react'
import { useState } from 'react'
import { ethers } from 'ethers'

const Purchase = () => {
  const [message, setMessage] = useState()

  async function buyTIcket() {
    if(!window.ethereum) return alert("No Metamask wallet found. Please install it!")

    const provider = new ethers.providers.Web3Provider(window.ethereum)
  
    const address = "0x671876CCA30443D95D20D5896596DA795C29F756"//minha carteira poor
    const signer = provider.getSigner()

    ethers.utils.getAddress(address)//o ideal seria fazer o usuário digitar o endereço para onde irá enviar o dinheiro

    const transactionValues = await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther("0.01")//aqui funciona da mesma forma que o endereço, o usuário digita quanto irá enviar. Aqui é enviado esse valor somado com a gas fee
    })

    setMessage(transactionValues)//a função transactionsValues retorna um objeto, então tenho que passar para string
  }


  return (
    <div className='flex flex-col items-center my-8 mx-12'>
      <div className='w-[280px]'>
          <img src='https://gateway.pinata.cloud/ipfs/QmUV7J7Th2H9y1Wycig5HnmzydXzCebJv9ioi6EDVrAJqx' alt='NFT'/>
      </div>
      <div className='mt-4'>
          <button className='px-14 py-2 bg-blue-700 rounded-full text-white text-xl font-medium cursor-pointer hover:bg-blue-800 hover:shadow-2xl hover:shadow-zinc-700' onClick={buyTIcket}>
            Buy Ticket
          </button>
      </div>
    </div>
  )
}

export default Purchase
