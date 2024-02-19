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
import Events from "./components/Events.jsx";
import NotFound from "./components/NotFound.jsx";
import EventDetails from "./components/EventDetails.jsx";
import React from "react";
function App() {
  const [count, setCount] = useState(0);
  const Events = React.lazy(() => import("./components/Events.jsx"));
  const NotFound = React.lazy(() => import("./components/NotFound.jsx"));

  return (
    <>
      <Suspense fallback={<p>Loading ....</p>}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/events" replace={true} />}
            ></Route>
            <Route path="/events" element={<Events />} />
            <Route path="/event/:eventTitle" element={<EventDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
