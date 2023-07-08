import "./reviews.css";

export const Reviews = ({ findRestaurant }) => {
  return (
    <div>
      <h1 className="reviews-heading">Reviews</h1>
      {findRestaurant?.ratings?.map(({ rating, comment, revName, pp }) => (
        <div key={revName} className="reviews">
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
  );
};
