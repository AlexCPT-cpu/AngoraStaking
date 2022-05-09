import Head from "next/head";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { Contract, ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../constants/abi.js";
import { hexValue } from "ethers/lib/utils";
import { TxList } from "../constants/TxList.js";
import { ErrorMessage } from "../constants/ErrorMessage.js";
import { Bignumber } from "@ethersproject/bignumber";
import Link from 'next/link';
import img from '../public/mylogo.png'



function Home() {


  return (
    <div className="devider">
      
        <title>Angora Staking</title>
       <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
      <header className="logoh">
    <a href="https://angorastaking.netlify.app"><img className="logo" src={"/mylogo.png"} alt="logo"   /></a><nav>
    <h1 className="homep">
        <Link href="/pool1">
    <a><button className="butt">Return to angoratoken.com</button></a>
  </Link></h1></nav></header>
<section className="sect">
 <><form>
 <p>ANGORA TOKEN</p>
 <p>APY&nbsp;:&nbsp;52%</p>
        <p>7 DAYS LOCK</p>
        <p><label htmlFor="first"></label></p>
        <p>
        <Link href="/pool1">
    <a><button className="button">STAKE NOW</button></a>
  </Link></p></form><form>
          <p>
          </p>
        </form></></section>
        <section className="section">
 <><form>
 <p>ANGORA TOKEN</p>
 <p>APY&nbsp;:&nbsp;104%</p>
        <p>30 DAYS LOCK</p>
        <p><label htmlFor="first"></label></p>
        <p>
        <Link href="/pool2">
    <a><button className="button">STAKE NOW</button></a>
  </Link></p></form><form>
          <p>
          </p>
        </form></></section>
        <section className="section">
 <><form>
 <p>ANGORA TOKEN</p>
 <p>APY&nbsp;:&nbsp;156%</p>
        <p>90 DAYS LOCK</p>
        <p><label htmlFor="first"></label></p>
        <p>
        <Link href="/pool3">
    <a><button className="button">STAKE NOW</button></a>
  </Link></p></form><form>
          <p>
          </p>
        </form></>
        </section>
      
  </div>
  
);
}

export default Home
