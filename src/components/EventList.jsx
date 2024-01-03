import React from 'react'
import { Link } from 'react-router-dom'
import EventDetails from '../pages/EventDetails'
import { NavLink } from 'react-router-dom'



function EventList({eventInfo, tense}) {
    console.log(eventInfo)
  return (
    <NavLink to={`:${eventInfo.id}`}>
        <div className=' flex w-full justify-between max-w-md py-3'>
            <div className="event-heroImg w-1/2">
            <img src={eventInfo?.heroImg} alt={"Airstatic image"} className='w-40  rounded-md object-contain' />
            </div>
            <div className="list-content w-1/2 ml-2 flex flex-col justify-start">
                <div className="list-copy">
                    <p className="title text-white text-md font-bold">{eventInfo?.name}</p>
                    <p className="text-white font-thin">{eventInfo?.location.country || `South Africa`}</p>
                    <p className="text-white font-thin">{eventInfo?.location.city || `Secret location`}</p>
                    <p className="text-white font-thin">{eventInfo?.date.toLocaleDateString() || "To be confirmed"}</p>
                </div>
                <div className="list-cta">
                <a className='text-yellow-500 underline uppercase ' src={`${eventInfo?.links.moreInfo}`}>
                    More info
                    </a>
                </div>
        </div>
    </div>
    </NavLink>
  )
}

export default EventList