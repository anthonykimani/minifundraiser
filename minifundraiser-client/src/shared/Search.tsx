import { svg } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-start border border-gray-300 p-1 m-2 my-4 rounded-full'>
        <Image src={svg.search} alt='search' />
        <input type="text" className='mx-2 h-[40px] w-full outline-none' placeholder='Search...' />
    </div>
  )
}

export default Search