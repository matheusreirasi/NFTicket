import React from "react";

import { ethers } from 'ethers';
import { useState } from 'react';

const {ethereum} = window

const Banner = () => {
    const [message, setMessage] = useState()
    const [account, setAccount] = useState()
    const [amount, setAmount] = useState()
  
  
    async function connect() {
      if(!window.ethereum) return alert("No Metamask wallet found. Please install it!")
      
  
      setMessage("Trying to connect")
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const accounts = await ethereum.request({method: "eth_requestAccounts"})
      const balance = await provider.getBalance(accounts[0].toString())
  
      if (accounts.length){
        setMessage("")
        setAccount(accounts[0])
        setAmount(ethers.utils.formatEther(balance))
      } else {
        console.log("No accounts found.")
      }
  
      console.log(accounts[0])
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
        value: ethers.utils.parseEther("0.1")//aqui funciona da mesma forma que o endereço, o usuário digita quanto irá enviar. Aqui é enviado esse valor somado com a gas fee
      })
  
      setMessage(transactionValues)//a função transactionsValues retorna um objeto, então tenho que passar para string
      
    }
  
    return (
        <div>
            {true
        ? (
          <div>
            <input type="button" value="Connect Wallet" onClick={connect}/>
          </div>
        )
        : (
          <div>
            <div>
              <p>
                Account:
                {account}
              </p>
              <p>
                Amount:
                {amount}
              </p>
            </div>
            <input type="button" value="Buy Ticket" onClick={transfer}/>       
          </div>
        )
      }
      <div>
      </div>
        </div>
    )
}

export default Banner