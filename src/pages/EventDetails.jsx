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
        alt="car event location icon"
        className="h-auto w-3 mr-2 "
      />
      <div href={`${event.address.googleMaps}`} target="_blank" rel="noreferrer"  className="text-white text-md   font-thin">
        {/* address field needed */}
        {event.address.description || `Address to be confirmed` }
      </div>
    </div>
    <div className="flex flex-start justify-start items-center text-white font-thin">
      <img src="/date-icon.png" alt=" car event address icon" className="h-auto w-3 mr-2" />
      <p className="text-white text-md font-thin">{new Date(event.date).toDateString()}</p>
    </div>
    <div className="flex flex-start justify-start items-center text-white font-thin">
      <svg className="h-auto w-3 mr-2" width="12" height="auto" viewBox="0 0 87 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M85.4144 17.2305C85.8324 17.2891 86.4535 17.3516 86.4574 16.75V5.5C86.4574 2.457 84.0004 0 80.9574 0H24.8714C24.844 1.7812 25.3362 4.4766 22.7894 4.582C20.2464 4.48044 20.7308 1.7812 20.7074 0H5.50038C2.45738 0 0.000377753 2.457 0.000377753 5.5V16.75C0.0120958 17.1992 0.433968 17.3359 0.812878 17.25C5.19568 17.0586 8.86368 20.6719 8.85588 25.043C8.86369 29.4141 5.19568 33.0274 0.812878 32.836C0.457408 32.7422 -0.0152522 32.8946 0.000377753 33.336V44.586C0.000377753 47.629 2.45738 50.086 5.50038 50.086H20.7074C20.6918 49.5157 20.7191 48.1719 20.7074 47.586C20.7074 46.4415 21.6449 45.504 22.7894 45.504C25.3363 45.5978 24.8519 48.3126 24.8714 50.086H80.9534C83.9964 50.086 86.4534 47.629 86.4534 44.586V33.336C86.4573 33.0391 86.1995 32.7774 85.8909 32.8165C75.2309 33.1485 74.7859 17.6095 85.4104 17.2345L85.4144 17.2305ZM24.8714 38.5425C24.8206 41.2769 20.7581 41.2808 20.7034 38.5425V35.5855C20.7463 32.8433 24.8284 32.8433 24.8714 35.5855V38.5425ZM24.8714 26.5225C24.8206 29.2569 20.7581 29.2608 20.7034 26.5225V23.5655C20.7034 22.421 21.6409 21.4835 22.7854 21.4835C23.9299 21.4835 24.8674 22.421 24.8674 23.5655V26.5225H24.8714ZM24.8714 14.5025C24.8284 17.2447 20.7464 17.2447 20.7034 14.5025V11.5455C20.7542 8.81107 24.8167 8.80717 24.8714 11.5455V14.5025ZM50.4334 39.5225H33.1634C30.4329 39.4717 30.4212 35.4092 33.1634 35.3545H50.4334C53.1639 35.4053 53.1756 39.4678 50.4334 39.5225ZM66.7034 27.1275H33.1604C30.4299 27.0767 30.4182 23.0142 33.1604 22.9595H66.7034C69.43 23.0103 69.4495 27.0728 66.7034 27.1275ZM66.7034 14.7325H33.1604C30.4299 14.6817 30.4182 10.6192 33.1604 10.5645H66.7034C69.43 10.6153 69.4495 14.6778 66.7034 14.7325Z" fill="#FEC201"/>
      </svg>
      <p className="text-white text-md font-thin">{ `R${event.ticketPrice}` || 'Free entrance'}</p>
    </div>
    {event.links.contactNo && (
      <div className="flex flex-start justify-start items-center text-white font-thin">
      <img src="/cellphone-icon.png" alt="event contact icon" className="h-auto w-3 mr-2" />
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
          <img src={image} alt="event gallery image" className='mx-auto w-full h-full object-cover bg-cover' />
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


