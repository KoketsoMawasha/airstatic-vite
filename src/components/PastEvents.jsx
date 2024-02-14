import React, {useEffect, useState} from "react";
import EventList from "./EventList";
import { createClient } from "@supabase/supabase-js";
import supabase from "../services/supabase";

const eventData = [
  {
    name: "LPM Car Show",
    location: {
      country: "South Africa",
      province: "Mpumalanga",
      city: "Bela-Bela",
    },
    date: new Date("03 Feb 2024"),
    links: {
      moreInfo: "http://agitated-span.biz",
      tickets: "http://glittering-honeybee.net",
    },
    heroImg: "https://i.pinimg.com/564x/a5/e5/45/a5e54504423a1488f14118944204c659.jpg",
    gallery: [
      "http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport ",
    ],
  },
  {
    name: "JDM Car Show",
    location: {
      country: "South Africa",
      province: "Gauteng",
      city: "Johannesburg",
    },
    date: new Date("13 September 2024"),
    links: {
      moreInfo: "http://agitated-span.biz",
      tickets: "http://glittering-honeybee.net",
    },
    heroImg: "https://i.pinimg.com/564x/d7/72/21/d772219d71f44004b4bb6d66e9d4a7bc.jpg",
    gallery: [
      "http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport ",
    ],
  },
  {
    name: "Campfest",
    location: {
      country: "South Africa",
      province: "Mpumalanga",
      city: "Bela-Bela",
    },
    date: new Date("03 Feb 2024"),
    links: {
      moreInfo: "http://agitated-span.biz",
      tickets: "http://glittering-honeybee.net",
    },
    heroImg: "https://vxgjbmpylrvarxxmosxd.supabase.co/storage/v1/object/sign/events/vdub-fest/banner-img.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJldmVudHMvdmR1Yi1mZXN0L2Jhbm5lci1pbWcuanBnIiwiaWF0IjoxNzA0NDA3NDcyLCJleHAiOjE4NjIwODc0NzJ9.vbg6dbELcV4Se036Fsi98Df9gs5RyOV6_CDeSzQJQY0&t=2024-01-04T22%3A36%3A32.755Z",
    gallery: [
      "http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport ",
    ],
  },
];

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
    <ul>
      {console.log(events)}
      {events.filter((eventEl)=>{
        const currentDate = new Date();
        const eventDate = new Date(eventEl.date);

        return currentDate > eventDate; 
      }).map((eventEl) => {
        return <EventList eventInfo={eventEl} tense="past" key={eventEl.name} />;
      })}
    </ul>
  );
}

export default PastEvents;
