import React from 'react'
import { Link } from 'react-router-dom'

function TopNav() {
  return (
    <nav className='flex flex-col justify-center align-middle pt-4 sticky bg-sky-500 top-0'> 
        <img src='/airstatic-v2-svg.svg' alt='airstatic logo' className='w-36 mb-2 bg-contain self-center'/>
        <ul className='grid grid-cols-3 text-center justify-center align-middle pt-4 w-full max-w-sm self-center select-none'>
            <Link to ="/">Home</Link>
            <Link to ="/events">Events</Link>
            <Link to ="#" className='grid grid-rows-2  '>Marketplace<span className=""><img src="/coming-soon.png" alt="Marketplace tab coming soon" /></span> </Link>
        </ul>
    </nav>
  )
}

export default TopNav