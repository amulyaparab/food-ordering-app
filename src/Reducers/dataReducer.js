import { restaurantsData } from "../Database/cuisineData";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESTAURANT":
      return {
        ...state,
        currentRestaurants: restaurantsData.filter(
          (restaurant) => restaurant.cuisine_id === action.payload.id
        ),
      };
    case "SET_COMMENT":
      return {
        ...state,
        review: {
          ...state.review,
          comment: action.payload,
        },
      };
    case "SET_RATING":
      return {
        ...state,
        review: {
          ...state.review,
          rating: action.payload,
        },
      };
    case "SUBMIT_REVIEW":
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) =>
          restaurant.id === action.payload
            ? {
                ...restaurant,
                ratings: [...restaurant.ratings, state.review],
              }
            : restaurant
        ),
        review: {
          revName: "Guest",
          rating: "",
          comment: "",
        },
      };
    case "CLEAR_REVIEW":
      return {
        ...state,
        review: {
          revName: "Guest",
          rating: "",
          comment: "",
        },
      };
    default:
      return state;
  }
};
