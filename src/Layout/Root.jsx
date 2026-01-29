

import React from "react";
import { Outlet } from "react-router";
import { NavLink } from 'react-router';
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

export default function Root() {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
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
          {/* Page content here */}
          <div className="bg-[#162354] min-h-screen border-1 border-l-blue-900 border-t-blue-900">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible text-white bg-[#111B3C]">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-center lg:mt-4 md:mt-4 mt-2 bg-[#111B3C] w-64 ">
            {/* Sidebar content here */}
            <div className="p-2 text-black rounded-md bg-gradient-to-t from-[#00D4FF] to-[#00FF88]">
              <AiOutlineThunderbolt />
            </div>
            <ul className="menu w-full grow  ">
              {/* List item */}
           
                 <li>
                <NavLink
                  to={"/"}
                  end
                  className={({ isActive }) =>
                    `flex items-center  gap-3 px-4 py-4 rounded-full w-60 is-drawer-close:overflow-hidden
 is-drawer-open:overflow-visible
     ${
       isActive
         ? "bg-transparent text-white font-semibold  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40 is-drawer-close:overflow-hidden"
         : "text-gray-300 hover:text-white/50"
     }`
                  }
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                 <IoHomeOutline />
                  <span className="text-white ">
                    Dashboard Overview
                  </span>
                </NavLink>
              </li>

              {/* List item */}
              <li>
                <NavLink
                  to={"/CallLogs"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-4 rounded-full is-drawer-close:overflow-hidden
     w-60 is-drawer-open:overflow-visible
     ${
       isActive
         ? "bg-transparent text-white font-semibold  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40"
         : "text-gray-300 hover:text-white/50"
     }`
                  }
                  data-tip="Homepage"
                >
                  {/* call icon */}
                  <IoCallOutline /> 
                  <span className="text-white">
                    Call Logs
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/appointments"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-4   rounded-full  is-drawer-close:overflow-hidden
    w-60 is-drawer-open:overflow-visible
     ${
       isActive
         ? "bg-transparent text-white font-semibold  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40"
         : "text-gray-300 hover:text-white/50"
     }`
                  }
                  data-tip="Homepage"
                >
                  {/* calender icon */}
                 <SlCalender></SlCalender>
                  <span className="text-white ">
                    Appointments
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/settings"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4   py-4 rounded-full  is-drawer-close:overflow-hidden
     w-60 is-drawer-open:overflow-visible 
     ${
       isActive
         ? "bg-transparent text-white font-semibold  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40"
         : "text-gray-300 hover:text-white/50"
     }`
                  }
                  data-tip="Homepage"
                >
                  {/* setting icon */}
                 <IoSettingsOutline/>
                  <span className="text-white ">
                    Settings
                  </span>
                </NavLink>
              </li>
              
             
              <li>
                <NavLink
                  to={"/logOut"}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 mt-68    rounded-full w-60 is-drawer-close:overflow-hidden
 is-drawer-open:overflow-visible
     ${
       isActive
         ? "bg-transparent text-white font-semibold  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40 is-drawer-close:overflow-hidden"
         : "text-gray-300 hover:text-white/50"
     }`
                  }
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                <IoMdLogOut/>
                  <span className="text-red-500 ">Log out
                  </span>
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


































