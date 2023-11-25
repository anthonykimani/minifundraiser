"use client"

import React, { createContext, useState, useContext } from "react";

export type GlobalType = {
    isSelectedCampaign: object;
    setSelectedCampaign: (c: object) => void;
}

export const AppContext = createContext<GlobalType>({
    isSelectedCampaign: {
        
    },
    setSelectedCampaign:  () => {},
})