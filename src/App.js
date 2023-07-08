import logo from "./logo.svg";
import "./App.css";
import { cuisineData } from "./Database/cuisineData";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SingleRestaurant } from "./Pages/SingleRestaurant";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restaurants/:restaurantId"
          element={<SingleRestaurant />}
        />
      </Routes>
    </div>
  );
}

export default App;
