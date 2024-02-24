import { useState } from "react";
import { restaurantList } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  console.log("Body rendered....");
  const [listOfRestaurants, setRestaurants] = useState([...restaurantList]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res?.data?.avgRating >= 4
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res.data.id} resCardDetails={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
