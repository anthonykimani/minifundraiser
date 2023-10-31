import { svg } from "@/constants";

export type CategoryType = {
  icon: string;
  text: string;
};

export const categories = [
  {
    icon: svg.location,
    text: "Near Me",
  },
  {
    icon: svg.donation,
    text: "Non-Profit",
  },
  {
    icon: svg.medical,
    text: "Medical",
  },
  {
    icon: svg.donation,
    text: "Non-Profit",
  },
];
