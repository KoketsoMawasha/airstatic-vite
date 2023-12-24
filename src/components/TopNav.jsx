import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <nav className='flex flex-col justify-center align-middle py-4 sticky bg-sky-500 top-0'> 
        <img src='/airstatic-typography.png' alt='airstatic logo' className='w-48 bg-contain self-center'/>
        <ul className='flex justify-evenly align-middle py-4 w-full max-w-screen-sm self-center'>
            <Link to ="/">Home</Link>
            <Link to ="/events">Events</Link>
            <Link to ="/event">Event</Link>
        </ul>
    </nav>
  )
}

export default TopNav