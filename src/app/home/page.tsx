import React from "react";
import AppBar from "../../shared/AppBar";
import Search from "@/shared/Search";
import Featured from "@/shared/Featured";
import Categories from "./components/Categories";
import VerifiedCampaigns from "@/shared/VerifiedCampaigns";
import NavBar from "@/shared/NavBar";

const Home = () => {
  return (
    <div className="overflow-auto font-DMsans">
      <AppBar />
      <Search />
      <Featured />
      <Categories />
      <VerifiedCampaigns />
      <NavBar />
    </div>
  );
};

export default Home;
