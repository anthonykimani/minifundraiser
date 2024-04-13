"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useForm } from "react-hook-form";
import { useAccount, useWriteContract } from "wagmi";
import * as campaignAbi from "../../abi/campaign.json";
import { parseEther, toHex } from "viem";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const CreateCampaign = () => {
  const [openCampaignModal, setOpenCampaignModal] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const {
    register: registerCampaignModal,
    handleSubmit: handleSubmitCampaignModal,
    setValue: setCampaignModalValue,
    formState: { errors: errorsCampaignModal },
    control: controlCampaignModal,
  } = useForm();
  const { writeContract } = useWriteContract();
  const { address } = useAccount();

  const onSubmitCampaignModal = async (data: any) => {
    // onsumbit CampaignModal logic

    const dateTimeStamp = Math.floor(date!.getTime() / 1000); // converst Date() to unix timestamp

    writeContract({
      abi: campaignAbi,
      address: "0xc7F15C6d31a993496C23888559D31ACBD159c8B0",
      functionName: "createCampaign",
      args: [
        toHex(data.campaignName, { size: 32 }),
        parseEther(`${data.amount}`),
        address,
        dateTimeStamp,
      ],
    });
  };
  return (
    <div className="mx-2">
      <Dialog open={openCampaignModal} onOpenChange={setOpenCampaignModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-black">
              {" "}
              Create a Fundraising Campaign
            </DialogTitle>
            <DialogDescription></DialogDescription>
            <hr className="my-4" />
            <DialogDescription>
              <form
                className="flex flex-col justify-around h-[400px]"
                onSubmit={handleSubmitCampaignModal(onSubmitCampaignModal)}
              >
                <div>
                  <label
                    htmlFor="campaignName"
                    className="text-black font-semibold mb-2 flex justify-start"
                  >
                    Campaign Name
                  </label>
                  <input
                    {...registerCampaignModal("campaignName", {
                      required: " This is required ",
                    })}
                    id="campaignName"
                    type="text"
                    placeholder="Enter Campaign Name"
                    className="flex justify-around border border-gray-300 bg-white rounded-full py-3 px-6  w-full focus:outline-none ring-offset-[#A5A5A533] focus-visible:bg-transparent text-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="text-black font-semibold mb-2 flex justify-start"
                  >
                    Amount
                  </label>
                  <input
                    {...registerCampaignModal("amount", {
                      required: " This is required ",
                    })}
                    id="amount"
                    type="number"
                    placeholder="Enter Amount"
                    className="flex justify-around border border-gray-300 bg-white rounded-full py-3 px-6  w-full focus:outline-none ring-offset-[#A5A5A533] focus-visible:bg-transparent text-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="campaignDeadline"
                    className="text-black font-semibold mb-2 flex justify-start"
                  >
                    Campaign Deadline
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex justify-center border border-gray-300 bg-white rounded-full py-3 px-6  w-full focus:outline-none ring-offset-[#A5A5A533] focus-visible:bg-transparent text-black">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <button
                  type="submit"
                  className="bg-[#E99123] text-white font-semibold rounded-full p-3"
                >
                  Submit
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="flex justify-start my-2 items-center">
        <h3 className="font-semibold">Create a Campaigns</h3>
      </div>
      <article className="bg-createCampaign bg-no-repeat bg-cover h-[100px] rounded-xl flex justify-end items-end">
        <button
          onClick={() => setOpenCampaignModal(true)}
          className="py-3 px-6 m-2 border text-[#E99123] rounded-full bg-white  hover:cursor-pointer hover:font-semibold"
        >
          Create Campaign
        </button>
      </article>
    </div>
  );
};

export default CreateCampaign;
