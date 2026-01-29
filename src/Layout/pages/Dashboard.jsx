import React from 'react'
import Cards from './Components/HomeComponants/Cards'
import Grafh from './Components/HomeComponants/Grafh'
import Activity from './Components/HomeComponants/Activity'


export default function Dashboard() {
  return (
    <div className='flex flex-col gap-8 mt-4 mx-4'>
      <Cards></Cards>
      <Grafh></Grafh>
      <Activity> </Activity>
    </div>
  )
}
