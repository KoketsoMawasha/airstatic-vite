import React from 'react'
import EventList from './EventList'

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
        heroImg: "https://i.pinimg.com/564x/c3/80/54/c3805456002454d98190123b74c1078e.jpg", 
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
  return (
    <ul> 
        {eventData.map((eventEl) =>{
            return(
                <EventList eventInfo={eventEl} tense={'future'} key={eventEl.id}/>
            )
        })}
    </ul>
  )
}

export default FutureEvents