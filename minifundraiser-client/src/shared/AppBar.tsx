"use client";

import React, { useState } from "react";
import { BigNumber } from "bignumber.js";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import truncateEthAddress from "truncate-eth-address";
import { List, XCircle } from "lucide-react";

const AppBar = () => {
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gradient-to-r from-[#E99123] to-[#FFBC6B] py-4 px-2 flex items-center justify-between">
      <h2 className=" text-white">MiniFundraiser</h2>
      <div className="block xsm:hidden">
        <List
          size={32}
          color="#ffffff"
          className="block lg:hidden"
          onClick={toggleMenu}
        />
      </div>
      <div
        className="absolute top-0 left-0 right-0 sm:block bg-white p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <XCircle size={32} color="#E99123" onClick={toggleMenu} />
        <ul className="flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto">
          <button
            onClick={isDisconnected ? () => open() : () => disconnect()}
            className="py-3 px-6 border border-white bg-[#E99123] rounded-full text-white hover:cursor-pointer"
          >
            {isDisconnected
              ? "Connect Wallet"
              : isConnecting
              ? "Connecting"
              : `Connected to ${truncateEthAddress(address)}`}
          </button>
        </ul>
      </div>

      <div className="hidden lg:flex items-center">
        <ul className=" flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto"></ul>
      </div>

      <button
        onClick={isDisconnected ? () => open() : () => disconnect()}
        className="hidden xsm:block py-3 px-6 border border-white bg-[#E99123] rounded-full text-white hover:cursor-pointer"
      >
        {isDisconnected
          ? "Connect Wallet"
          : isConnecting
          ? "Connecting"
          : `Connected to ${truncateEthAddress(address)}`}
      </button>
    </div>
  );
};

export default AppBar;
