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
import {
  useAccount,
  useSignMessage,
  useWaitForTransactionReceipt,
  useWriteContract,
  useConnect
} from "wagmi";
import { campaignABI } from "../../abi/campaign";
import { parseEther, toHex } from "viem";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { contract } from "@/constants/contract";
import { config } from "@/config";
import { sepolia, liskSepolia } from "viem/chains";
import { injected } from '@wagmi/connectors'


const CreateCampaign = () => {
  const { connectAsync } = useConnect();

  const [openCampaignModal, setOpenCampaignModal] = useState(false);
  const [date, setDate] = React.useState<Date>();
  const {
    register: registerCampaignModal,
    handleSubmit: handleSubmitCampaignModal,
    setValue: setCampaignModalValue,
    formState: { errors: errorsCampaignModal },
    control: controlCampaignModal,
  } = useForm();
  const {
    status,
    data: hash,
    writeContract,
    isPending,
    error,
    writeContractAsync
  } = useWriteContract({
    config,
  });
  const { address } = useAccount();


  const onSubmitCampaignModal = async (dataparam: any) => {
    // onsumbit CampaignModal logic
    if(!address) {
      await connectAsync({ chainId: liskSepolia.id, connector: injected()})
    }

    const dateTimeStamp = Math.floor(date!.getTime() / 1000); // converst Date() to unix timestamp
    console.log(dataparam);
    
    const createCampaign = await writeContractAsync({
      abi: campaignABI,
      address: contract.address,
      functionName: "createCampaign",
      args: [
        toHex(dataparam.campaignName, { size: 32 }),
        parseEther(`${dataparam.amount}`),
        address as `0x${string}`,
        BigInt(dateTimeStamp),
      ],
    });

    console.log(createCampaign, status, hash, error);
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      chainId: liskSepolia.id,
      hash,
    });

    console.log({ isLoading: isConfirming, isSuccess: isConfirmed });
    

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
                disabled={isPending}
                type="submit"
                className="bg-[#E99123] text-white font-semibold rounded-full p-3"
              >
                {isPending ? "Confirming..." : "Create Campaign"}
              </button>
            </form>
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
