import { verifiedData } from "@/helpers/verifiedData";
import React from "react";
import HorizontalCampaignCard from "./HorizontalCampaignCard";

const VerifiedCampaigns = () => {
  return (
    <div className="mx-1">
        <div className='flex justify-between my-3 items-center'>
            <h3 className='font-semibold'>Verified Campaigns</h3>
            <h4 className='text-[#E99123] text-sm '>View All</h4>
        </div>
      <div>
        {verifiedData.map((data, index) => {
          return (
            <HorizontalCampaignCard
              key={index}
              img={data.img}
              text={data.text}
              location={data.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VerifiedCampaigns;
