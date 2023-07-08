import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../Contexts/DataProvider";
import { ReviewForm } from "../Components/ReviewForm/ReviewForm";
import { Reviews } from "../Components/Reviews/Reviews";

export const SingleRestaurant = () => {
  const { restaurantId } = useParams();
  const { state, showReviewForm, setShowReviewForm } = useData();
  const navigate = useNavigate();
  const findRestaurant = state.restaurants.find(
    ({ id }) => id === Number(restaurantId)
  );

  return (
    <>
      <i class="fa-solid fa-arrow-left back" onClick={() => navigate("/")}></i>
      <div className="restaurant-deets">
        <h1>{findRestaurant?.name}</h1>
        <p>
          {findRestaurant?.menu?.map(({ name }) => (
            <span key={name}>{`${name} , `}</span>
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
      <Reviews findRestaurant={findRestaurant} />
      {showReviewForm && <ReviewForm restaurantId={restaurantId} />}
    </>
  );
};
