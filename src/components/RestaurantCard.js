import { imgUrl } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log("Restaurant card rendered....");
  const { resCardDetails } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resCardDetails;
  return (
    <div className="mr-4 mb-2 p-5 w-64 h-96 bg-gray-200 rounded shadow-md hover:border hover:border-black hover:cursor-pointer">
      <img className="w-100 h-1/3 object-cover" src={`${imgUrl}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} ⭐️</h3>
      <h3>🚴🏽‍♂️ {deliveryTime} mins</h3>
    </div>
  );
};

export default RestaurantCard;
