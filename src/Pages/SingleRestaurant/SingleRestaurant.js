import "./singleRestaurant.css";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../Contexts/DataProvider";
import { ReviewForm } from "../../Components/ReviewForm/ReviewForm";
import { Reviews } from "../../Components/Reviews/Reviews";

export const SingleRestaurant = () => {
  const { restaurantId } = useParams();
  const { state, showReviewForm, setShowReviewForm } = useData();
  const navigate = useNavigate();
  const findRestaurant = state.restaurants.find(
    ({ id }) => id === Number(restaurantId)
  );

  return (
    <>
      <i
        className="fa-solid fa-arrow-left back"
        onClick={() => navigate("/")}
      ></i>
      <div className="restaurant-deets">
        <h1>{findRestaurant?.name}</h1>
        <p>
          {findRestaurant?.menu?.map(({ name }, index) =>
            index === findRestaurant?.menu?.length - 1 ? (
              <span key={name}>{`${name}.`}</span>
            ) : (
              <span key={name}>{`${name} , `}</span>
            )
          )}
        </p>
        <p>{findRestaurant?.address}</p>
        <p>
          Average Rating:{" "}
          {findRestaurant?.ratings
            ?.reduce(
              (acc, curr) =>
                (acc += curr.rating / findRestaurant?.ratings?.length),
              0
            )
            ?.toFixed(1)}
        </p>
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
