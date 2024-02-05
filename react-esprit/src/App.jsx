import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Events from "./components/Events.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/events" replace={true} />}
          ></Route>
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
