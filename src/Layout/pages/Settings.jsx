import React from 'react'
import { Outlet } from "react-router";
import { NavLink } from 'react-router';
export default function Settings() {
  return (
    <div>
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

