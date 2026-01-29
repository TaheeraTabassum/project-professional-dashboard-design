import React from 'react'
import Cards from './Components/HomeComponants/Cards'
import Grafh from './Components/HomeComponants/Grafh'
import Activity from './Components/HomeComponants/Activity'
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Dashboard() {
  return (
   <div>
     <nav className="navbar flex flex-wrap justify-between w-full text-white bg-[#111B3C]">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square lg:w-60 md:w-50 lg:text-lg w-40 btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <p>Dashboard Overview</p>
            </label>
            <div className="flex items-center lg:gap-6">
              <div className="">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle "
                >
                  <div className="indicator ">
                    <IoMdNotificationsOutline />
                  </div>
                </div>
              </div>
              <div className="lg:w-10 md:w-10 w-8 mr-8">
                <img
                  className="rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </nav>
   <div className='flex flex-col gap-8 mt-4 mx-4'>
      <Cards></Cards>
      <Grafh></Grafh>
      <Activity> </Activity>
    </div>
    </div>
  )
}
