import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../constants/abi.js";
import { hexValue } from "ethers/lib/utils";
import { TxList } from "../constants/TxList.js";
import { ErrorMessage } from "../constants/ErrorMessage.js";
import { Bignumber } from "@ethersproject/bignumber";
import Link from 'next/link';


let web3Modal;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL }, // required
    },
  },
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  });
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true), [];
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect({method: "eth_requestAccounts"});
        setIsConnected(true);
        
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function deposit() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0xbaaCE760e122A1b7f787054D45Eb66362b52a08c";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.deposit(0, 3);
      } catch (error) {
        console.log(error);
        if (error)
      alert (error);
      else {
        alert(Stake, removed);
      }
    } //else {
      //console.log("Please install MetaMask");
    }
  }

const setHandler2 =(event) => {
  event.preventDefault();
  contract.withdraw(event.target.setNum.value + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18);
}


  async function withdraw() {
    if (typeof window.ethereum !== "undefined") {
    const contractAddress = "0xbaaCE760e122A1b7f787054D45Eb66362b52a08c";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.withdraw(0);
    } catch (error) {
      console.log(error);
      if (error)
       alert(Stake, removed);
       
      else {
        alert ("Stake Still Locked");
      }
    }
  } else {
    console.log("Please install MetaMask");
  }
}


async function pendingReward() {
  if (typeof window.ethereum !== "undefined") {
  const contractAddress = "0xbaaCE760e122A1b7f787054D45Eb66362b52a08c";
  const contract = new ethers.Contract(contractAddress, abi, signer);
  try {
    await contract.pendingReward("0xbaaCE760e122A1b7f787054D45Eb66362b52a08c");
  } catch (error) {
    console.log(error);
    if (error)
     console.log(error);
     
    else {
      alert (pendingReward().toString());
    }
  }
} else {
  console.log("Please install MetaMask");
}
}


async function totalSupply() {
  if (typeof window.ethereum !== "undefined") {
    const contractAddress = "0xbaaCE760e122A1b7f787054D45Eb66362b52a08c";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
    const result =  await contract.totalSupply();
    } catch (error) {
      console.log(result);
      }
    }

  }const setHandler3 =(event) => {
  event.preventDefault();
  contract.totalSupply();
  console.log(totalSupply())
}




async function getDeposit() {
  if (typeof window.ethereum !== "undefined") {
    const contractAddress = "0xbaaCE760e122A1b7f787054D45Eb66362b52a08c";
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
    const bal =  await contract.getDeposit("0xC4A761bEc8F62BCf5CA91CF87aA943F0BBb3Be14");
    } catch (error) {
      console.log(bal);
      }
    }

  }const setHandler4 =(event) => {
  event.preventDefault();
  contract.getDeposit("0xC4A761bEc8F62BCf5CA91CF87aA943F0BBb3Be14");
  console.log(getDeposit("0xC4A761bEc8F62BCf5CA91CF87aA943F0BBb3Be14"))
  
}





    // const deposit = await contract.getDeposit()
   //  console.log(deposit.toString())
   const contractAddress = "0xbaaCE760e122A1b7f787054D45Eb66362b52a08c";
   const contract = new ethers.Contract(contractAddress, abi, signer);
const setHandler =(event) => {
  event.preventDefault();
  contract.deposit(event.target.setText.value + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18 + 0E18, 3);
}




  return (
    <div className="devider">
    {hasMetamask ? (
      isConnected ? (
        <button className="button"> Connected!</button>
      ) : (
        <button className="button" onClick={() => connect()}>Connect</button>
      )
    ) : (
      "Please install metamask"
    )}
      <title>Angora Staking</title>
       <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <header className="logoh">
    <a href="https://angorastaking.netlify.app"><img className="logo" src={"/mylogo.png"} alt="logo"   /></a><nav>
    <h1 className="homep">
        <Link href="https://angoratoken.com">
    <a><button className="butt">Return to angoratoken.com</button></a>
  </Link><br /><Link href="https://angorastaking.netlify.app">
    <a><button className="homer">Return to Home</button></a>
  </Link></h1></nav></header>
<section className="section">
{isConnected ? <><form onSubmit={setHandler}>
        <p>APY&nbsp;:&nbsp;&nbsp;156%</p>
        <p><label htmlFor="first">STAKE</label></p>
        <input className="input" type="number" placeholder="input stake amount" id="setText" />
        <p>
          <button className="button" type="submit">Deposit Angora Token</button></p></form><form>
          <p>
          </p>
        </form></>: ""}</section>
        <section className="section">
{isConnected ? <><form onSubmit={setHandler2}>
        <p></p>
       <p> <label htmlFor="first"> Withdraw</label></p>
        <input className="input" type="number" placeholder="input withdrawal amount" id="setNum" />
        <p>
          <button className="button" type="submit">Withdraw Angora Token</button></p></form><form>
          <p></p>
        </form></>: ""}</section> 
        <section className="section">
{isConnected ? <>
        
        <p>
          <button className="button" onClick={setHandler3}>Total Staked</button></p></>: ""}</section>
          <section className="section">
{isConnected ? <>
        
        <p>
          <button className="button" onClick={setHandler4} >Check Balance</button></p></>: ""}</section>
  </div>
  
);
}
