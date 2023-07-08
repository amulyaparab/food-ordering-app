import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../Contexts/DataProvider";
import { useState } from "react";

export const SingleRestaurant = () => {
  const { restaurantId } = useParams();
  const { state, dispatch } = useData();
  const findRestaurant = state.restaurants.find(
    ({ id }) => id === Number(restaurantId)
  );
  console.log(findRestaurant);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <i class="fa-solid fa-arrow-left back" onClick={() => navigate("/")}></i>
      <div className="restaurant-deets">
        <h1>{findRestaurant?.name}</h1>
        <p>
          {findRestaurant?.menu?.map(({ name }) => (
            <span>{`${name} , `}</span>
          ))}
        </p>
        <p>{findRestaurant?.address}</p>
        <p>Average Rating: {findRestaurant?.averageRating}</p>
        <button
          className="restaurant-btn"
          onClick={() => setShowReviewForm(true)}
        >
          Add Review
        </button>
      </div>
      <hr />
      <div>
        <h1>Reviews</h1>
        {findRestaurant?.ratings?.map(({ rating, comment, revName, pp }) => (
          <div className="reviews">
            <div className="review-details">
              <div className="review-profile">
                {pp ? (
                  <img src={pp} alt={revName} />
                ) : (
                  <i class="fa-solid fa-circle-user guest"></i>
                )}
                <h4>{revName}</h4>
              </div>
              <div className="rating">
                {rating}
                <i class="fa-solid fa-star small "></i>
              </div>
            </div>
            <p>{comment}</p>
            <hr />
          </div>
        ))}
      </div>
      {showReviewForm && (
        <div className="overlay">
          <div className="pop-up">
            <i
              class="fa-solid fa-circle-xmark"
              onClick={() => setShowReviewForm(false)}
            ></i>
            <h1>Add Your Review</h1>
            <label>
              Rating:
              <select
                onChange={(event) =>
                  dispatch({ type: "SET_RATING", payload: event.target.value })
                }
              >
                <option>Select Rating</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option>{rating}</option>
                ))}
              </select>
            </label>
            <label>
              {" "}
              Comment:
              <input
                onChange={(event) =>
                  dispatch({ type: "SET_COMMENT", payload: event.target.value })
                }
              />
            </label>
            <button
              onClick={() =>
                dispatch({
                  type: "SUBMIT_REVIEW",
                  payload: Number(restaurantId),
                })
              }
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
//    id: 1,
//     name: "Pizza Palace",
//     cuisine_id: 1,
//     address: "123 Main Street",
//     phone: "555-1234",
//     menu: [
//       {
//         name: "Margherita Pizza",
//         imgSrc: "https://b.zmtcdn.com/data/dish_photos/9e7/bdf4fa911a76e5ba0656f5adad9749e7.png?output-format=webp",
//         price: 500,
//         qty: "one"
//       },
//       {
//         name: "Pepperoni Pizza",
//         imgSrc: "https://b.zmtcdn.com/data/dish_photos/6c9/c89a5e86eece9f96e3b8be3f6bb2c6c9.jpg?output-format=webp",
//         price: 400,
//         qty: "two"
//       },
//       {
//         name: "Pasta Carbonara",
//         imgSrc: "https://b.zmtcdn.com/data/dish_photos/6d8/84eeabf844ca5c9c310a8ed3671086d8.jpg?output-format=webp",
//         price: 250,
//         qty: "one"
//       },
//       {
//         name: "Tiramisu",
//         imgSrc: "https://b.zmtcdn.com/data/o2_assets/87c70510634544f14945f5c2acf173a11632716549.png",
//         price: 300,
//         qty: "one"
//       }
//     ],
// 		ratings: [
//       {
//         rating: 2,
//         comment: "Disappointing food and slow service",
//         revName: "Riya",
//         pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
//       },
//       {
//         rating: 2,
//         comment: "Overpriced menu for mediocre quality",
//         pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
//         revName: "Krish"
//       },
//       {
//         rating: 1,
//         comment: "Lackluster flavors and unappealing presentatio",
//         pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0",
//         revName: "Kripla"
//       },
//     ],
//     averageRating: 4.3,
//     description: "Delicious pizzas and pasta."
//   },
