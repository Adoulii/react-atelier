import { useState } from "react";
import NavigationBar from "./NavigationBar";
// import { DataService } from "../services/api";

function AddEvent() {
  const [event, setEvent] = useState(null);
  
  const handleChange = (value) => {
    value.preventDefault();
    setEvent({ ...event, [value.target.name]: value.target.value });
    console.log(event);
  };
  const handleSubmit = () => {
    value.preventDefault();
    console.log(event)
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
            />
          </div>
          <div className="space-y-5">
            <h1>Descritpion</h1>
            <input
              onChange={(event) => handleChange(event)}
              type="text "
              className="bg-gray-100 p-4 w-full"
              placeholder="Descritpion"
              name=""
              id=""
            />
          </div>
          <div className="space-y-5">
            <h1>Price</h1>
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              className="bg-gray-100 p-4 w-full"
              placeholder="Price"
              defaultValue={0}
              min={0}
              name=""
              id=""
            />
          </div>
          <div className="space-y-5">
            <h1>Number Of tickets</h1>
            <input
              onChange={(event) => handleChange(event)}
              type="number"
              className="bg-gray-100 p-4 w-full"
              placeholder="Number Of tickets"
              name=""
              defaultValue={0}
              min={0}
              id=""
            />
          </div>
          <div className="space-y-5">
            <h1>Event Images</h1>
            <input
              type="file"
              className="bg-gray-100 p-4 w-full"
              placeholder="Import event images"
              name=""
              id=""
            />
          </div>
          <button
            type="submit"
            onClick={() => handleSubmit()}
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
