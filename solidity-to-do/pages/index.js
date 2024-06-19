import { useState } from "react";
import TaskAbi from "../../backend/build/contracts/TaskContract.json";
import { TaskContractAddress } from "../config.js";
import { ethers } from "ethers";

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("false");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <connectWallet />
    </div>
  );
}
