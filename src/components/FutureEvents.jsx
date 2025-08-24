import React, { useEffect, useState } from 'react'
import EventList from './EventList'
import supabase from '../services/supabase'

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
            <div className="w-full h-screen flex flex-col justify-center align-middle mx-auto text-white text-center">
            <p className="text-3xl font-heading">Loading...</p>
            </div>  }
        {!isLoading && (<ul className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-5 gap-y-6 mt-5 md:mt-8'> 
            {
    eventsData
        .filter(eventEl => {
            const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight, start of the current day.

    const eventDate = new Date(eventEl.date);
    eventDate.setHours(0, 0, 0, 0); // Normalize event date to start of the day as well.

    return eventDate >= currentDate;
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(eventEl => (
            <EventList eventInfo={eventEl} tense={'future'} key={eventEl.id}/>
        ))
}
    </ul>)}
            </div>
        
  )
}

export default FutureEvents