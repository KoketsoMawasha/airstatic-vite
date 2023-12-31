import React from 'react'
import { NavLink } from 'react-router-dom'

function EventsTab() {
  return (
    <nav className='p-4'>
        <ul className='flex justify-evenly text-lg align-middle text-neutral-500  max-w-sm mx-auto'>
            <li>
                <NavLink className="p-4"  to="past">Past Events</NavLink>
            </li>
            <li className=' '>
                <NavLink className="p-4" to="future">Future Events</NavLink>
            </li>
        </ul>
    </nav> 
  )
}

export default EventsTab