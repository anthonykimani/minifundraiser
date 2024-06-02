import { categories } from "@/helpers/categories";
import { categoryData } from "@/helpers/categoryData";
import Category from "@/shared/Category";
import VerticalCampaignCard from "@/shared/VerticalCampaignCard";
import React from "react";
import { useReadContract } from 'wagmi'
import { campaignABI } from "../../../../abi/campaign";
import { contract } from "@/constants/contract";

const Categories = () => {
  const { data } = useReadContract({
    abi: campaignABI,
    address: contract.address,
    functionName: 'campaigns',
    args: [BigInt(1)]
  })

  console.log("data", data);
  

  return (
    <div className="mx-2 mt-[50px]">
      <div className="flex justify-between my-2 items-center">
        <h3 className="font-semibold">Browse By Categories</h3>
        <h4 className="text-[#E99123] text-sm ">View All</h4>
      </div>
      <div className="flex min-w-[300px] overflow-x-scroll">
        {categories.map((category, index) => {
          return (
            <Category key={index} icon={category.icon} text={category.text} />
          );
        })}
      </div>
      <div className="mt-[20px] flex min-w-[300px] overflow-x-scroll">
        {categoryData.map((data, index) => {
          return (
            <VerticalCampaignCard
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

export default Categories;
