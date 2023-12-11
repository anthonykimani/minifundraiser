import { img } from "@/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Progress } from "@/shared/ui/progress";
import Image from "next/image";
import React from "react";

const CampaignBody = () => {
  return (
    <div>
      <article className="bg-cover bg-campaign h-[200px] p-2">
        <div className="flex text-white bg-[#007F5F] w-[140px] p-1 items-center rounded-md ">
          <i className="bx bxs-book"></i>
          <h4>Sponsorships</h4>
        </div>
      </article>
      <article className="p-2">
        <h3 className="font-semibold my-2 text-xl">
          Asking for Help to Pay SchoolFees
        </h3>
        <h4 className="my-2">
          My two daughters need funds to pay for their education and I can’t
          afford ...
        </h4>
        <div className="flex items-start my-3 mt-8">
          <Image
            src={img.ThreeMixedRaceLadies}
            alt=""
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="mx-3">
            <h4 className="font-semibold">by Mama Anna</h4>
            <h5 className="text-sm">
              Created at 9th Jun 2023 | Mombasa, Kenya
            </h5>
          </div>
        </div>
        <Progress value={33} className=" mt-8" />
        <div className="flex justify-between my-2">
          <span className="flex justify-start">
            <h4>Raised: </h4>
            <h4>10,000kes</h4>
          </span>
          <span className="flex justify-start">
            <h4>Goal: </h4>
            <h4>20,000kes</h4>
          </span>
        </div>
        <div className="border flex justify-between w-full py-2  mt-8">
          <div className="flex items-center">
            <i className="bx bxs-heart bx-sm text-[#007F5F]"></i>
            <h4 className="text-sm"> 20 Donations</h4>
          </div>
          <div className="flex items-center">
            <i className="bx bx-donate-heart bx-sm text-[#007F5F]"></i>
            <h4 className="text-sm"> 16 Likes</h4>
          </div>
          <div className="flex items-center">
            <i className="bx bxs-calendar bx-sm text-[#007F5F]"></i>
            <h4 className="text-sm"> 12th July 2023</h4>
          </div>
        </div>
        <div className="flex flex-col items-center my-3">
          <Dialog>
            <DialogTrigger className="w-[98%]">
              <button className="bg-[#FFBC6B] text-white rounded-md p-3 w-full">
                Donate
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter Amount to Donate</DialogTitle>
                <DialogDescription>
                  
                </DialogDescription>
                <form>
                    <input type="number" placeholder="Enter Amount to Donate..." className="border border-gray-300 rounded-md p-3 w-full my-2"/>
                    <input type="submit" value="Confirm Donation" className="bg-[#E96D23] text-white rounded-md p-3 w-full" />
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <button className="text-[#FFBC6B] border border-[#FFBC6B] rounded-md p-3 w-[98%] mt-3">
            Share
          </button>
        </div>
      </article>
    </div>
  );
};

export default CampaignBody;
