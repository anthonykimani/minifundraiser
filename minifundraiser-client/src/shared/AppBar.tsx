import React from "react";
import { BigNumber } from "bignumber.js";
// import { useWeb3Modal } from "@web3modal/wagmi/react";

const AppBar = () => {
  // const { open } = useWeb3Modal();
  return (
    <div className="bg-gradient-to-r from-[#E99123] to-[#FFBC6B] py-4 px-2 flex items-center justify-between">
      <h2 className="text-white">MiniFundraiser</h2>

      {/* onClick={() => open()}*/}
      <button className="py-3 px-6 border border-white bg-[#E99123] rounded-full text-white hover:cursor-pointer">
        Connect Wallet
      </button>
    </div>
  );
};

export default AppBar;
