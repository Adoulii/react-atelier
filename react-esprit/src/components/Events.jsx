import React from "react";
import eventList from "../data/events.json";
import Event from "./event";
import NavigationBar from "./NavigationBar";

function Events() {
  // const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <NavigationBar />
      <h1 className="font-bold text-3xl">Events List</h1>
      <div className="flex mt-4 p-5 space-x-5">
        {eventList.map((e, i) => {
          return (
            <Event
              img={e.img}
              name={e.name}
              price={e.price}
              key={i}
              nbTickets={e.nbTickets}
              nbParticipants={e.nbParticipants}
            />
          );
        })}
      </div>
    </>
  );
}

export default Events;
