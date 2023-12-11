import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bg-gradient-to-r from-[#E99123] to-[#FFBC6B] flex justify-around items-center text-white h-[60px]">
        <Link href="/" className="flex flex-col items-center ">
          <i className="bx bxs-home bx-sm"></i>
          <h3 className="text-sm">Home</h3>
        </Link>
        <Link href="/campaign" className="flex flex-col items-center">
          <i className="bx bx-clipboard bx-sm"></i>
          <h3 className="text-sm">Campaigns</h3>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <i className="bx bx-search bx-sm"></i>
          <h3 className="text-sm">Search</h3>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <i className="bx bxs-user bx-sm"></i>
          <h3 className="text-sm">Profile</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
