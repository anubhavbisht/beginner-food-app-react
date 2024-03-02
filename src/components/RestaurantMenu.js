import { useEffect, useState } from "react";
import { restaurantMenuUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  const restaurantId = params.resId;
  const fetchMenu = async () => {
    const data = await fetch(restaurantMenuUrl + restaurantId);
    console.log(restaurantMenuUrl + restaurantId, "link");
    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    console.log("Use effect called in RestaurantMenu");
    fetchMenu();
  }, []);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3></h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
