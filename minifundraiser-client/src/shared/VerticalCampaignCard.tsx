import { svg } from "@/constants";
import { CardType } from "@/types/componentTypes";
import Image from "next/image";
import React from "react";

const VerticalCampaignCard = ({ img, text, location }: CardType) => {
  return (
    <div className="rounded-xl min-w-[180px] overflow-hidden border border-gray-200 mx-1">
      <Image src={img} alt="" className=" bg-cover" />
      <div className="p-1">
        <h3 className="text-sm my-1 font-semibold">{text}</h3>
        <div className="flex justify-around items-center my-2">
          <Image src={svg.location} alt="" />
          <h4 className="text-sm">{location}</h4>
        </div>
      </div>
    </div>
  );
};

export default VerticalCampaignCard;
