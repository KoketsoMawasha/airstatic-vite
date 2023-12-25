import React from 'react'
import TopNav from '../components/TopNav'

function EventDetails() {
  
  const detailsData =
  {
      name: "JDM Car Show", 
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
  }

  console.log(detailsData)

  return (
    <div className='bg-neutral-900 w-[100vw] min-h-screen flex flex-col'>
    <TopNav />
    <div className="hero-img w-full mb-4">
      <img src="/stance-social.png" alt="Event banner image" className='w-full ' />
    </div>
    <div className='content w-screen flex flex-col self-start px-4 sm:self-center max-w-lg'>
      <div className="event-title w-full">
        <p className="text-white  text-left font-medium text-2xl">{detailsData.name}</p>
      </div>
      <div className="flex flex-start justify-start items-center">
          <img
            src="/location-icon.png"
            alt="Location icon"
            className="h-auto w-3 mr-2"
          />
          <p className="text-white text-md font-thin">
            {/* should be address here  */}
            {detailsData.location.city}
          </p>
      </div>
      <div className="flex flex-start justify-start items-center">
        <img src="/date-icon.png" alt="Address icon" className="h-auto w-3 mr-2" />
        <p className="text-white text-md font-thin">{detailsData.date.toDateString()}</p>
      </div>
        <p className="event-description text-white py-2 mb-4">
          Join us for an exclusive Stance Show in Alex, the heart of Jozi. Come see a
          star studded line up of Mzanzi’s favorite stance cars and influencers. We
          promise you chilled vibes, beautiful cars and a day you wont forget!
        </p>
    </div>
    <div className="event-ticket p-4 w-[calc(100vw-20px)] max-w-lg bg-sky-500 text-center rounded-md fixed left-1/2 -translate-x-1/2 bottom-4">
      <a href='https://google.com' className="primary-cta text-white font-medium">
        Get tickets
      </a>
    </div>
  </div>
  )
}

export default EventDetails