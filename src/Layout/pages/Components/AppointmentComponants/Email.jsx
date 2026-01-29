import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
export default function Email() {
  return (
    <div className='text-white'> 
        {/* card section here */}
        <div className='lg:flex justify-between m-6 ' >
          <div className='p-4 border border-gray-600 rounded-md pr-32 bg-[#111B3B]'>
            <div className='flex items-center gap-3 '>
<CiCalendar className='text-blue-400 font-bold' />
              <p className='text-xs text-gray-300'>Total Booked</p>
            </div>
            <p>34</p>
            <p className='text-xs text-blue-500'>+8 this week</p>
          </div>
          <div className='p-4 border border-gray-600 rounded-md pr-32  bg-[#111B3B]'>
            <div className='flex items-center gap-3 '>
<FaRegCheckCircle className='text-blue-400 font-bold' />
              <p className='text-xs text-gray-300'>AI Booked</p>
            </div>
            <p>50</p>
            <p className='text-xs text-blue-500'>+8 this week</p>
          </div>
          <div className='p-4 border border-gray-600 rounded-md pr-32  bg-[#111B3B]'>
            <div className='flex items-center gap-3 '>
< MdErrorOutline  className='text-blue-400 font-bold' />
              <p className='text-xs text-gray-300'>Pending</p>
            </div>
            <p>08</p>
            <p className='text-xs text-blue-500'>+8 this week</p>
          </div>

        </div>
        {/* Email section here */}
        <div>

        </div>
    </div>
  )
}
