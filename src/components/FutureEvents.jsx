import React, { useEffect, useState } from 'react'
import EventList from './EventList'
import supabase from '../services/supabase'

const eventData = [
    {
        id: "5348",
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
    },
    {
        id:"6764",
        name: "Campfest", 
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
        heroImg: "https://vxgjbmpylrvarxxmosxd.supabase.co/storage/v1/object/sign/events/vdub-fest/banner-img.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJldmVudHMvdmR1Yi1mZXN0L2Jhbm5lci1pbWcuanBnIiwiaWF0IjoxNzA0NDA3NDcyLCJleHAiOjE4NjIwODc0NzJ9.vbg6dbELcV4Se036Fsi98Df9gs5RyOV6_CDeSzQJQY0&t=2024-01-04T22%3A36%3A32.755Z", 
        gallery: ["http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport "]
    },
    {
        id:"68746",
        name: "LPM Car Show", 
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

function FutureEvents() {
    const [eventsData, setEventsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    // const [eventError, setEventError] = useState()
    
    const fetchEvents = async ()=>{
        try{   
        let {data: eventsData, error} = await supabase.from('events').select('*');
        if(error){
             throw new Error(error)
        }
        if(eventsData){
            setEventsData(eventsData)
            setIsLoading(false)
        }
        }catch(err){
            console.error(err)
            setIsLoading(false)
        }
        
        console.log(eventsData)
    }
    
    useEffect(()=>{
        fetchEvents()
    },[])
    
    return (
        <div className="w-full h-full">
        {isLoading && 
            <div className="w-full h-screen flex flex-col justify-center align-middle text-white text-center">
            <p className="text-3xl font-heading">Loading...</p>
            </div>  }
        {!isLoading && (<ul> 
        {eventsData.map((eventEl) =>{
            return(
                <EventList eventInfo={eventEl} tense={'future'} key={eventEl.id}/>
                )
            })}
    </ul>)}
            </div>
        
  )
}

export default FutureEvents