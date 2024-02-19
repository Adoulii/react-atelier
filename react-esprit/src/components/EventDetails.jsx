import data from "../data/events.json";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function EventDetails(props) {
  const { eventTitle } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [isLiked, SetIsLike] = useState(false);

  const fetchEventDetails = (eventName) => {
    const event = data.find((event) => event.name === eventName);
    return event;
  };
  useEffect(() => {
    const details = fetchEventDetails(eventTitle);
    setEventDetails(details);
  }, [eventTitle]);

  if (!eventDetails) {
    return <div>Loading...</div>;
  }
  const { name, price, nbTickets, nbParticipants, img } = props;
  const bookEvent = () => {
    setNbParticipants(nbParticipants + 1);
    setNbTickets(nbTickets - 1);
    if (nbTickets == 1) {
      console.log("changing image");
      setImg("sold_out.png");
    }
    alert("You have booked an event");
  };

  const handleLikeState = () => {
    SetIsLike(!isLiked);
  };

  return (
    <>
      <div className="max-w-sm p-6 text-left bg-white border border-gray-200 rounded-lg shadow">
        <img
          className="w-full h-45"
          src={`../images/${eventDetails.img}`}
          alt="image-event"
        />

        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{eventDetails.name}</h2>
          <p className="text-gray-700 text-base">Price: {eventDetails.price}</p>
          <div className="pt-4 pb-2">
            <p>Number of tickets: {eventDetails.nbTickets}</p>
            <p>Number of Participants: {eventDetails.nbParticipants}</p>
          </div>
          <button
            onClick={() => bookEvent()}
            disabled={nbTickets == 0}
            className=" inline-flex items-center  px-3 py-2 text-sm  text-center  bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded"
          >
            Book an event
          </button>
          <button
            onClick={() => handleLikeState()}
            className=" ml-3 inline-flex items-center  px-3 py-2 text-sm  text-center  bg-blue-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300bg-blue-500  text-white font-bold  rounded"
          >
            {isLiked ? "Dislike" : "Like"}
          </button>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
