import { categories } from "@/helpers/categories";
import Category from "@/shared/Category";
import React from "react";

const Categories = () => {
  return (
    <div className="mx-2 mt-[50px]">
      <div className="flex justify-between my-3 ">
        <h3 className="">Browse by Categories</h3>
        <h4 className="text-[#E99123]">View All</h4>
      </div>
      <div className="flex min-w-[300px] overflow-x-scroll">
        {categories.map((category, index) => {
          return (
            <Category key={index} icon={category.icon} text={category.text} />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
