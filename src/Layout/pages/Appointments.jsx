import React from 'react'
import List from './Components/AppointmentComponants/List'
import Email from './Components/AppointmentComponants/Email'
import BookingLink from './Components/AppointmentComponants/BookingLink'

export default function Appointments() {
  return (
    <div>
      <Email></Email>
      <BookingLink></BookingLink>
      <List></List>
    </div>
  )
}
