import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { VscRobot } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
export default function Cards() {
     const details = [
        {
           title:"Total Calls Today",
          value:"127",
          percent:"+12%",
          positive:true,
          icon:<IoCallOutline/>,
          iconBg:"bg-blue-500"
        },

       {
          title:"AI-Handled Calls",
          value:"98",
          percent:"+77%",
          positive:true,
          icon:<VscRobot/>,
          iconBg: "bg-pink-500"
        },
{
        
          title:"Warm Transfer",
          value:"23",
          percent:"+18%",
          positive:true,
          icon:<FaArrowRightArrowLeft/>,
          iconBg:"bg-orange-500"
        },
        {
          title:"Appointments Booked",
          value:"34",
          percent:"+8%",
          positive:true,
          icon:<SlCalender/>,
          iconBg:"bg-green-500"
       } ,

        {
            title:"Missed / Failed Calls",
          value:"6",
          percent:"-3%",
          positive:false,
          
          icon:<CiNoWaitingSign/>,
          iconBg:"bg-red-500"
        },

        {
          title:"Avg Call Duration",
          value:"3:42",
          percent:"+15%",
          positive:true,
          icon:<FaRegClock/>,
          iconBg:"bg-indigo-500"
       
        }
    ];
return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {details.map((card, index) => (
        <div
          key={index}
          className="relative rounded-xl p-5 bg-[#0F172B] shadow-lg border border-white/5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">{card.title}</p>
              <h2 className="text-2xl font-semibold text-white">
                {card.value}
              </h2>
            </div>

            <div
              className={`flex items-center justify-center rounded-lg w-10 h-10 text-white ${card.iconBg}`}
            >
              {card.icon}
            </div>
          </div>

          <p
            className={`mt-2 text-sm font-medium flex items-center gap-1 ${
              card.positive ? "text-green-400" : "text-red-400"
            }`}
          >
            {card.positive ? "▲" : "▼"} {card.percent}
          </p>
        </div>
      ))}
    </div>
  );
}
