import { createContext, useContext, useReducer, useState } from "react";
import { restaurantsData } from "../Database/cuisineData";
import { dataReducer } from "../Reducers/dataReducer";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = {
    restaurants: restaurantsData,
    currentRestaurants: [],
    review: {
      revName: "Guest",
      rating: "",
      comment: "",
    },
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <DataContext.Provider
      value={{ state, dispatch, showReviewForm, setShowReviewForm }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
