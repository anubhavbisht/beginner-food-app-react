import { imgUrl } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log("Restaurant card rendered....");
  const { resCardDetails } = props;
  const { data } = resCardDetails;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = data;
  return (
    <div className="res-card">
      <img className="res-logo" src={`${imgUrl}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} ⭐️</h3>
      <h3>🚴🏽‍♂️ {deliveryTime} mins</h3>
    </div>
  );
};

export default RestaurantCard;
