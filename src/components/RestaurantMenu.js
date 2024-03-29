import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/customHooks";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines: cuisineNames = [],
    costForTwoMessage = "",
  } = resInfo.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h3 className="text-lg text-gray-500">
        {cuisineNames.join(", ")} - {costForTwoMessage}
      </h3>
      <h3 className="text-xl font-medium mt-4">Menu</h3>
      <ul className="list-none mt-4">
        {itemCards?.map((item) => (
          <li
            key={item.card.info.id}
            className="flex justify-between border-b border-gray-200 py-2"
          >
            <span className="text-base font-medium">{item.card.info.name}</span>
            <span className="text-base font-medium">
              Rs {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
