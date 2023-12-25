import React from 'react'
import { NavLink } from 'react-router-dom'

function EventsTab() {
  return (
    <nav className='p-4'>
        <ul className='flex justify-center align-middle text-neutral-500'>
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