import React, { useCallback, useEffect, useState } from "react";
import eventList from "../data/events.json";
import Event from "./event";
import NavigationBar from "./NavigationBar";
import DataService from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, selectEvents } from "../redux/slices/eventslice";
function Events() {
  const dispatch = useDispatch();
  const [events, errors] = useSelector(selectEvents);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchEvents());
    console.log(events);
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
