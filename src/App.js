import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Calendar from "./components/calendar";
import Journal from "./components/journal";
import Planner from "./components/planner";

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path="/" element={<Planner />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
};

export default App;
