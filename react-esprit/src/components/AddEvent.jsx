import { useState } from "react";
import NavigationBar from "./NavigationBar";
import DataService from "../services/api";

import { useDispatch, useSelector } from "react-redux";
import { addEventReducer } from "../redux/slices/eventslice";
// import { DataService } from "../services/api";

function AddEvent() {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    nbTickets: "",
  });

  const handleChange = (value) => {
    value.preventDefault();
    setEvent({ ...event, [value.target.name]: value.target.value });
    console.log(event);
  };
  const dispatch = useDispatch();
  const error = useSelector((state) => state.events.erros);

  const handleSubmit = async () => {
    try {
      dispatch(addEventReducer(event));
      await DataService.addEvent(event);
    } catch (error) {
      console.loy(error);
    }
  };
  return (
    <>
      <NavigationBar />
      <form className="space-y-5">
        <h1 className="font-bold text-xl p-5">Add new event</h1>
        <div className="flex flex-col text-left space-y-3">
          <div className="space-y-5">
            <h1>Title</h1>
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              className="bg-gray-100 p-4 w-full"
              placeholder="Title"
              name="name"
            />
          </div>
          <div className="space-y-5">
            <h1>Description</h1>
            <input
              onChange={handleChange}
              type="text "
              className="bg-gray-100 p-4 w-full"
              placeholder="Description"
              name="description"
              id=""
            />
          </div>
          <div className="space-y-5">
            <h1>Price</h1>
            <input
              onChange={handleChange}
              type="number"
              className="bg-gray-100 p-4 w-full"
              placeholder="Price"
              defaultValue={0}
              min={0}
              name="price"
              id=""
            />
          </div>
          <div className="space-y-5">
            <h1>Number Of tickets</h1>
            <input
              onChange={handleChange}
              type="number"
              className="bg-gray-100 p-4 w-full"
              placeholder="Number Of tickets"
              name="nbTickets"
              defaultValue={0}
              min={0}
              id=""
            />
          </div>
          <div className="space-y-5">
            <h1>Event Images</h1>
            <input
              onChange={handleChange}
              type="file"
              className="bg-gray-100 p-4 w-full"
              placeholder="Import event images"
              name="img"
              id=""
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="font-bold bg-blue-600 rounded-lg w-36 p-6 text-white hover:bg-blue-300"
          >
            Add Event
          </button>
        </div>
      </form>
    </>
  );
}

export default AddEvent;
