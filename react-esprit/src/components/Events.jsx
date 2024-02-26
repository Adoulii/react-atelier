import React, { useCallback, useEffect, useState } from "react";
import eventList from "../data/events.json";
import Event from "./event";
import NavigationBar from "./NavigationBar";
import DataService from "../services/api";
function Events() {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await DataService.getallEvents();
      setEvents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(false);
    }
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <NavigationBar />
      <h1 className="font-bold text-3xl">Events List</h1>
      <div className="flex mt-4 p-5 space-x-5">
        {events.map((e, i) => {
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
