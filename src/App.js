import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { SingleRestaurant } from "./Pages/SingleRestaurant/SingleRestaurant";

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
