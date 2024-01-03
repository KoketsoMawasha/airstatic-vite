import React from 'react'
import TopNav from '../components/TopNav'
import { useParams } from 'react-router-dom'

const eventData = [
  {
      id: "5348",
      name: "JDM Car Show", 
      summary: "Join us for an exclusive Stance Show in Alex, the heart of Jozi. Come see a star studded line up of Mzanzi’s favorite stance cars influencers. We promise you chilled vibes, beautiful cars and a day you wont forget!", 
          location: {
          country: "South Africa", 
          province: "Gauteng", 
          city: "Johannesburg"
      }, 
      date: new Date("13 September 2024"), 
      links:{
          moreInfo: "http://agitated-span.biz",
          tickets:"http://glittering-honeybee.net",
      }, 
      heroImg: "https://i.pinimg.com/564x/d7/72/21/d772219d71f44004b4bb6d66e9d4a7bc.jpg", 
      gallery: ["http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport "]
  },
  {
      id:"6764",
      name: "Campfest", 
      summary: "Deserunt reiciendis exercitationem et et beatae qui voluptas molestiae. Ea magni eum dolor quas eos nemo sapiente possimus illo. Itaque culpa est corrupti animi. Reprehenderit autem rerum nihil architecto expedita consequatur in iure.",
      location: {
          country: "South Africa", 
          province: "Mpumalanga", 
          city: "Bela-Bela"
      }, 
      date: new Date("03 Feb 2024"), 
      links:{
          moreInfo: "http://agitated-span.biz",
          tickets:"http://glittering-honeybee.net",
      }, 
      heroImg: "https://i.pinimg.com/564x/c3/80/54/c3805456002454d98190123b74c1078e.jpg", 
      gallery: ["http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport "]
  },
  {
      id:"68746",
      name: "LPM Car Show", 
      summary: "Provident ab praesentium at tempora error dolor. Praesentium fugit ut iusto itaque enim fuga. Corporis nulla aut.Delectus dolor vitae omnis facere. Quae voluptatem rerum voluptatem hic ullam. Esse quia suscipit autem praesentium dolores eligendi. Nihil minima hic nulla odio impedit laudantium ratione. Veritatis in voluptatibus qui natus.",
      location: {
          country: "South Africa", 
          province: "Mpumalanga", 
          city: "Bela-Bela"
      }, 
      date: new Date("03 Feb 2024"), 
      links:{
          moreInfo: "http://agitated-span.biz",
          tickets:"http://glittering-honeybee.net",
      }, 
      heroImg: "https://i.pinimg.com/564x/10/f2/4f/10f24f8934c4e9f6941431972879665d.jpg", 
      gallery: ["http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport "]
  }
]

const findEvent = (data, idParam) =>{
  return data.find((entry) => {
    const entryId = entry.id.toString()
    return entryId == idParam
    // console.log(entry.id, idParam)
  });
}

function EventDetails() {
  const idParam = useParams()
  // console.log(idParam.id.slice(1));
  const eventParam = idParam.id.slice(1)
  console.log(findEvent(eventData, eventParam));

  const event = findEvent(eventData, eventParam)
  const {city, country} = event.location
  

  return (
    <div className='bg-neutral-900 w-[100vw] min-h-screen flex flex-col pb-28'>
    <TopNav />
    <div className="hero-img w-full mb-4">
      <img src={event.heroImg} alt="Event banner image" className='w-full max-w-lg mx-auto' />
    </div>
    <div className="event-details mb-4 px-4 max-w-lg mx-auto w-full">
          <p className="text-white text-2xl py-2  font-body font-bold">{event.name}</p>
          <div className="flex flex-start justify-start items-center">
            <img
              src="/location-icon.png"
              alt="Location icon"
              className="h-auto w-3 mr-2"
            />
            <p className="text-white text-md font-thin">
              {/* address field needed */}
              {`${city}, ${country} `}
            </p>
          </div>
          <div className="flex flex-start justify-start items-center">
            <img src="/date-icon.png" alt="Address icon" className="h-auto w-3 mr-2" />
            <p className="text-white text-md font-thin">{event.date.toDateString()}</p>
          </div>
          <p className="event-description text-white py-2">
            {event.summary}
          </p>
        </div>
    <div className="event-ticket p-4 w-[calc(100vw-20px)] max-w-lg bg-sky-500 text-center rounded-md fixed left-1/2 -translate-x-1/2 bottom-4">
      <a href={event.links.tickets} className="primary-cta text-white font-medium">
        Get tickets
      </a>
    </div>
  </div>
  )
}

export default EventDetails