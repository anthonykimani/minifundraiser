import { svg } from '@/constants'
import { CardType } from '@/types/componentTypes'
import Image from 'next/image'
import React from 'react'

const HorizontalCampaignCard = ({img, text, location}:CardType) => {
  return (
    <div className="flex rounded-xl min-w-[180px] overflow-hidden border border-gray-200 my-2">
      <Image src={img} alt="" className=" bg-contain w-[100px]" />
      <div className="p-1">
        <h3 className="text-sm my-1 font-semibold">{text}</h3>
        <div className="flex justify-start items-center my-2">
          <Image src={svg.location} alt="" />
          <h4 className="text-sm mx-2">{location}</h4>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCampaignCard