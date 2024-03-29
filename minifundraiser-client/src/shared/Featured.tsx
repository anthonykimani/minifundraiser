import img from "@/constants/img";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mx-2">
      <div className="flex justify-between my-2 items-center">
        <h3 className="font-semibold">Featured Campaigns</h3>
        <h4 className="text-[#E99123] text-sm ">View All</h4>
      </div>
      <article className="bg-featured bg-cover h-[200px] rounded-xl flex justify-end items-end">
        <button className="m-3 bg-white px-3 py-2 rounded-md">See more</button>
      </article>
    </div>
  );
};

export default Featured;
