import { StaticImageData } from "next/image";

export type CategoryType = {
  icon: string;
  text: string;
};

export type CardType = {
    img: StaticImageData;
    text: string;
    location: string;
}