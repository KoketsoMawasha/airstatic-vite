import React, {useEffect, useState} from "react";
import EventList from "./EventList";
import { createClient } from "@supabase/supabase-js";
import supabase from "../services/supabase";

function PastEvents() {
  const [events, setEvents] = useState([])

  useEffect(()=>{
    const fetchEvents = async () => {
      try {
        // Fetch data from the 'events' table
        let { data, error } = await supabase.from('events').select('*');

        if (error) {
          throw error;
        }

        // Set the fetched events to the state
        if (data) {
          setEvents(data);
        }
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    }
    
    fetchEvents()

    },[])
  
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6 mt-5 md:mt-8">
      {events.filter((eventEl)=>{
        const currentDate = new Date();
        const eventDate = new Date(eventEl.date);

        return currentDate > eventDate; 
      }).sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Sort to get the closest date first
      }).map((eventEl) => {
        return <EventList eventInfo={eventEl} tense="past" key={eventEl.name} />;
      })}
    </ul>
  );
}

export default PastEvents;
