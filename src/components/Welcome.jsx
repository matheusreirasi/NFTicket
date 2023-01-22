import React from "react";

import { ethers } from 'ethers';
import { useState } from 'react';

const {ethereum} = window

const Welcome = () => {
    const [message, setMessage] = useState()
    const [account, setAccount] = useState()
    const [amount, setAmount] = useState()
  
  
    async function connect() {
      if(!window.ethereum) return alert("No Metamask wallet found. Please install it!")
      
  
      setMessage("Trying to connect")
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const accounts = await ethereum.request({method: "eth_requestAccounts"})
      const currentAccount = accounts[0]
      const balance = await provider.getBalance(currentAccount.toString())
  
      if (accounts.length){
        setMessage("")
        setAccount(accounts[0])
        setAmount(ethers.utils.formatEther(balance))
      } else {
        console.log("No accounts found.")
      }
  
      console.log(currentAccount)
      console.log(balance)
    }
  
  
    async function transfer() {
      if(!window.ethereum) return setMessage("No Metamask wallet found. Please install it!")
  
      const provider = new ethers.providers.Web3Provider(window.ethereum)
  
      const address = "0xC62575EbC3358005f7741aAaC23b64CC532A7Dc2"//minha carteira poor
      const signer = provider.getSigner()
  
      ethers.utils.getAddress(address)//o ideal seria fazer o usuário digitar o endereço para onde irá enviar o dinheiro
  
      const transactionValues = await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther("0.01")//aqui funciona da mesma forma que o endereço, o usuário digita quanto irá enviar. Aqui é enviado esse valor somado com a gas fee
      })
  
      setMessage(transactionValues)//a função transactionsValues retorna um objeto, então tenho que passar para string
      
    }
  
    return (
      <div className="flex flex-col justify-around mx-12">
        <div className="text-4xl text-2">
          Acompanhe os jogos das <br/>melhores equipes da UFF.
        </div>
        {!account
          ? (
            <input className="mx-4 py-2 rounded-full text-2xl text-white bg-blue-700 cursor-pointer hover:bg-blue-800 hover:shadow-2xl hover:shadow-zinc-700" type="button" value="Connect Wallet" onClick={connect}/>
          )
          : (
              <div className="m-4 text-white white-glassmorphism shadow-md shadow-zinc-700">
                <p className="my-1 font-bold">
                  Endereço:
                  <span className="font-medium">
                    {account}
                  </span>
                </p>
                <p className="my-1 font-bold">
                  Saldo:
                  <span className="font-medium">
                    {amount}
                  </span>
                </p>
              </div>      
          )
        }
      </div>
    )
  }

export default Welcome