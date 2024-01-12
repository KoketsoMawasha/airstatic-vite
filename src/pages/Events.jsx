import React from 'react'
import TopNav from '../components/TopNav'
import EventList from '../components/EventList'
import { Outlet } from 'react-router-dom'
import EventsTab from '../components/EventsTab'



function Events() {
  return (
    <div className='bg-neutral-900 w-[100vw] min-h-screen flex flex-col'>
        <TopNav />
        <EventsTab/>
        <div className="w-full content flex flex-col self-start px-4 sm:self-center max-w-sm">
        <Outlet />
        </div>
            
    </div>
  )
}

export default Events