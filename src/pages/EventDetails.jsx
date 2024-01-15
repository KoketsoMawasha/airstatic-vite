import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import { useParams } from 'react-router-dom'
import supabase from '../services/supabase'

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
      summary: "The event involves a renowned Show & Shine competition which features a variety of categories from over 400 contestants (that are shortlisted to around 120 vehicles via pre-registration) and the show normally establishes the best project cars in the country for the current year. The level of competing vehicles at this event are arguably the most outstanding on the SA scene. The judging panel and entertainment lineup regularly include international personalities. The ultimate Best Of show winner receives a grand prize package that incorporates a trip to one of the largest international counterpart VAG motor shows.",
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
      heroImg: "https://vxgjbmpylrvarxxmosxd.supabase.co/storage/v1/object/sign/events/vdub-fest/vdub-tiguan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJldmVudHMvdmR1Yi1mZXN0L3ZkdWItdGlndWFuLmpwZyIsImlhdCI6MTcwNDQwNzc2NSwiZXhwIjoxODYyMDg3NzY1fQ.hAHcgqlyQyLUUwH1KmOXEK9IoXRxznZSXda25OxJF6s&t=2024-01-04T22%3A41%3A25.415Z", 
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
  const [event, setEvent] = useState();
  const [isLoading, setIsLoading] = useState(true)


  const fetchData = async (eventId) =>{
    try{
      let {data, error} = await supabase.from('events').select('*').eq('id', `${eventId}`); 
      if(data){
        setEvent(data[0])
        setIsLoading(false)
        // console.log(data[0])
        console.log(event)
      }
      if(error){
        console.error(error)
        setIsLoading(false)
      }
    }catch(err){
      console.log(err)
      setIsLoading(false)
    }
  }

  const idParam = useParams()
  // console.log(idParam.id.slice(1));
  const eventParam = idParam.id.slice(1)

  // const event = findEvent(eventData, eventParam)
  
  useEffect(()=>{
    fetchData(eventParam)
    
  },[])

  return (
    <div className='bg-neutral-900 w-[100vw] min-h-screen flex flex-col pb-28'>
    <TopNav />
    {console.log(event)}
    {isLoading && 
    <div className="w-full h-screen flex flex-col justify-center align-middle text-white text-center">
      <p className="text-3xl font-heading">Loading...</p>
    </div>  }
    
    {!isLoading && (
      <>
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
      <a href={`${event.address.googleMaps}`} target="_blank" rel="noreferrer"  className="text-white text-md underline underline-offset-4  font-thin">
        {/* address field needed */}
        {event.address.description || `Address to be confirmed` }
      </a>
    </div>
    <div className="flex flex-start justify-start items-center text-white font-thin">
      <img src="/date-icon.png" alt="Address icon" className="h-auto w-3 mr-2" />
      <p className="text-white text-md font-thin">{new Date(event.date).toDateString()}</p>
    </div>
    {event.links.contactNo && (
      <div className="flex flex-start justify-start items-center text-white font-thin">
      <img src="/date-icon.png" alt="Address icon" className="h-auto w-3 mr-2" />
      <p className="text-white text-md font-thin">{event.links.contactNo}</p>
    </div>
    )}
    <p className="event-description mb-4 text-white py-2">
      {event.summary}
    </p>

    <div className="">
    {event.gallery ? (<p className="text-white text-2xl py-2 font-body font-bold">Event Gallery</p>) :(<p className="text-white text-2xl py-2 font-body font-bold">Event Gallery <span className='text-yellow-500 font-heading text-sm font-extralight'>coming soon</span></p>)}
    <div className="grid grid-cols-2 gap-2">
      {/* {console.log(event.gallery)} */}
      {event.gallery?.map((image)=>{
        return (
        <div key={image} className='h-52'>
          <img src={image} alt="Event banner image" className='mx-auto w-full h-full object-cover bg-cover' />
        </div>
        )
      })}
    </div>
    </div>

  </div>


  {event.links.tickets && (
    <div className="event-ticket p-4 w-[calc(100vw-20px)] max-w-lg bg-sky-500 text-center rounded-md fixed left-1/2 -translate-x-1/2 bottom-4">
    <a href={event.links.tickets} className="primary-cta text-white font-medium">
      Get tickets
    </a>
  </div>
  )}
      </>
  )
    }
    </div>
  )
}

export default EventDetails


