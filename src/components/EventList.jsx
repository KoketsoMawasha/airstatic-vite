import React from 'react'
import { Link } from 'react-router-dom'
import EventDetails from '../pages/EventDetails'
import { NavLink } from 'react-router-dom'

function EventList({eventInfo, tense}) {
  const eventDate = new Date(eventInfo.date)
  return (
    <NavLink to={`:${eventInfo.id}`}>
        <div className=' flex w-full justify-between max-w-md py-3'>
            <div className="event-heroImg w-1/2">
            <img src={eventInfo?.heroImg} alt={"Airstatic image"} className='h-auto w-full  rounded-md' />
            </div>
            <div className="list-content w-1/2 ml-2 flex flex-col justify-start">
                <div className="list-copy">
                    <p className="title text-white text-md font-bold">{eventInfo?.name}</p>
                    {/* <p className="text-white font-thin">{eventInfo.address || `South Africa`}</p> */}
                    {console.log(eventInfo)}
                    <p className="text-white text-sm font-thin">{eventInfo?.address.description || `Secret location`}</p>
                    <p className="text-white text-sm font-thin">{eventDate?.toLocaleDateString() || "To be confirmed"}</p>
                </div>
                <div className="list-cta">
                <p className='text-yellow-500  '>
                    More info
                    </p>
                </div>
        </div>
    </div>
    </NavLink>
  )
}

export default EventList