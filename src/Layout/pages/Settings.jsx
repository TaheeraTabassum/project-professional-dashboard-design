import React from 'react'
import { Outlet } from "react-router";
import { NavLink } from 'react-router';
 import { IoMdNotificationsOutline } from "react-icons/io";
export default function Settings() {
  return (
    <div>
       <nav className="navbar flex flex-wrap justify-between w-full text-white bg-[#111B3C]">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square lg:w-60 md:w-50 lg:text-lg w-40 btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <p>Settings</p>
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
      <nav className='text-white p-4 flex gap-8'>
        <NavLink  className={({isActive})=>isActive?'text-[#2eeea7] text-lg  font-bold':''}   to={"profile"} >Profile</NavLink>
        <NavLink>Password Settings</NavLink>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

