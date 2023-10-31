import { CategoryType } from "@/types/componentTypes";
import Image from "next/image";
import React from "react";

const Category = ({ icon, text }: CategoryType) => {
  return (
    <div className="flex justify-around rounded-full border border-gray-200 min-w-[120px] p-1 mx-1">
      <Image src={icon} alt="location" />
      <h4>{text}</h4>
    </div>
  );
};

export default Category;
