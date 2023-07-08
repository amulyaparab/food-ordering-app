import { useState } from "react";
import { cuisineData } from "../Database/cuisineData";
import { useData } from "../Contexts/DataProvider";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [showRestaurants, setShowRestaurants] = useState(false);
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  console.log(state);
  return (
    <>
      <h1>Food Ordering App</h1>
      <h3>Select Your Cuisine</h3>
      {cuisineData.map((cuisine) => (
        <button
          key={cuisine.id}
          onClick={() => {
            setShowRestaurants(true);
            dispatch({ type: "SET_RESTAURANT", payload: cuisine });
          }}
        >
          {cuisine.name}
        </button>
      ))}
      {showRestaurants && (
        <div className="entire-restaurant">
          {state?.currentRestaurants?.map((restaurant) => (
            <div onClick={() => navigate(`/restaurants/${restaurant?.id}`)}>
              <h1 className="restaurant-heading">
                Dishes By {restaurant?.name}
              </h1>
              <div className="restaurantList">
                {restaurant?.menu?.map(({ name, imgSrc, price, qty }) => (
                  <div key={name}>
                    <img src={imgSrc} alt={name} />
                    <h3>{name}</h3>
                    <p>
                      Rs {price} for {qty}
                    </p>
                    <p>{restaurant?.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
