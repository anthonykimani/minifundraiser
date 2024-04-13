import React from "react";
import AppBar from "../../shared/AppBar";
import Search from "@/shared/Search";
import Featured from "@/shared/Featured";
import Categories from "./components/Categories";
import VerifiedCampaigns from "@/shared/VerifiedCampaigns";
import NavBar from "@/shared/NavBar";
import CreateCampaign from "@/shared/CreateCampaign";
import { ethers } from "ethers";
import ABI from "../../../abi/campaign.json";

const Home = () => {
  // // Ensure MiniPay provider is available
  // if (window.ethereum && window.ethereum.isMiniPay) {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  // } else {
  //   console.error("MiniPay provider not detected");
  // }

  return (
    <div className="overflow-auto font-DMsans">
      <AppBar />
      <Search />
      <Featured />
      <Categories />
      <CreateCampaign />
      <VerifiedCampaigns />
      <NavBar />
    </div>
  );
};

export default Home;
