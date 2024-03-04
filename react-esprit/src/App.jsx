import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventDetails from "./components/EventDetails.jsx";
import React from "react";
import AddEvent from "./components/AddEvent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "./redux/slices/eventslice.js";
import WhishListItems from "./components/WhishListItems.jsx";
function App() {
  const [count, setCount] = useState(0);
  const Events = React.lazy(() => import("./components/Events.jsx"));
  const NotFound = React.lazy(() => import("./components/NotFound.jsx"));
  const dispatch = useDispatch();
  return (
    <>
      <Suspense fallback={<p>Loading ....</p>}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/events" replace={true} />}
            ></Route>
            <Route
              path="/events"
              element={<Events />}
              loader={dispatch(fetchEvents)}
            />
            <Route path="/event/:eventTitle" element={<EventDetails />} />
            <Route path="/events/new" element={<AddEvent />} />
            <Route path="/wishlist" element={<WhishListItems />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
