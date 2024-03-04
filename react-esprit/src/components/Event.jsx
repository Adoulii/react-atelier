import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/whishlistSlice";
function Event(props) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const [nbParticipants, setNbParticipants] = useState(props.nbParticipants);
  const [nbTickets, setNbTickets] = useState(props.nbTickets);
  const [img, setImg] = useState(props.img);
  const [isLiked, SetIsLike] = useState(false);
  var imgUlr = props.img;
  const bookEvent = () => {
    setNbParticipants(nbParticipants + 1);
    setNbTickets(nbTickets - 1);
    console.log(nbTickets);
    if (nbTickets == 1) {
      console.log("changing image");
      setImg("sold_out.png");
    }
    alert("You have booked an event");
  };

  const handleLikeState = () => {
    SetIsLike(!isLiked);
  };

  const handleWishlist = () => {
    const isEventInWishlist = wishlistItems.some(
      (item) => item.id === props.id
    );
    if (isEventInWishlist) {
      dispatch(removeFromWishlist(props.id));
    } else {
      dispatch(addToWishlist(props));
    }
  };
  return (
    <>
      <div className="max-w-sm p-6 text-left bg-white border border-gray-200 rounded-lg shadow ">
        <img
          className="w-full h-45"
          src={`images/${img}`}
          alt="image-event"
        ></img>

        <div className="px-6 py-4">
          <Link
            to={`/event/${props.name}`}
            className="text-black hover:text-gray-300 font-bold text-xl mb-2"
          >
            {props.name}
          </Link>
          <p className="text-gray-700 text-base">Price: {props.price}</p>
          <div className=" pt-4 pb-2">
            <p>Number of tickets: {nbTickets}</p>
            <p>Number of Participants: {nbParticipants}</p>
          </div>
        </div>

        <button
          onClick={() => bookEvent()}
          disabled={nbTickets == 0}
          className=" inline-flex items-center  px-3 py-2 text-sm  text-center  bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300bg-blue-500  text-white font-bold  rounded"
        >
          Book an event
        </button>
        <button
          onClick={() => handleLikeState()}
          className=" ml-3 inline-flex items-center  px-3 py-2 text-sm  text-center  bg-blue-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300bg-blue-500  text-white font-bold  rounded"
        >
          {isLiked ? "Dislike" : "Like"}
        </button>
        <button
          onClick={() => handleWishlist()}
          className=" ml-3 inline-flex items-center  px-3 py-2 text-sm  text-center  bg-green-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300bg-blue-500  text-white font-bold  rounded"
        >
          Add to whishlist
        </button>
      </div>
    </>
  );
}

export default Event;
