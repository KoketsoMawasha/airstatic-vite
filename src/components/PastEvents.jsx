import React from "react";
import EventList from "./EventList";

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
    heroImg: "https://i.pinimg.com/564x/ee/6f/a3/ee6fa30c2348a7a3bd3b177d3acb7491.jpg",
    gallery: [
      "http://placeimg.com/640/480/nature, http://placeimg.com/640/480/transport, http://placeimg.com/640/480/transport ",
    ],
  },
];

function PastEvents() {
  return (
    <>
      {eventData.map((eventEl) => {
        return <EventList eventInfo={eventEl} key={eventEl.name} />;
      })}
    </>
  );
}

export default PastEvents;