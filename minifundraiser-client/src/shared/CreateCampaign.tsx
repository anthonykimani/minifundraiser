import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useForm } from "react-hook-form";

const CreateCampaign = () => {
  const [openCampaignModal, setOpenCampaignModal] = useState(false);
  const {
    register: registerCampaignModal,
    handleSubmit: handleSubmitCampaignModal,
    setValue: setCampaignModalValue,
    formState: { errors: errorsCampaignModal },
    control: controlCampaignModal,
  } = useForm();

  const onSubmitCampaignModal = async (data: any) => {
    // onsumbit CampaignModal logic
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
                className="flex flex-col justify-around h-[200px]"
                onSubmit={handleSubmitCampaignModal(onSubmitCampaignModal)}
              >
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
      <article className="bg-createCampaign h-[100px] rounded-xl flex justify-end items-end">
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
