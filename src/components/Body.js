import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantsUrl } from "../utils/constants";

const Body = () => {
  console.log("Body rendered....");
  const [listOfRestaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(restaurantsUrl);
    if (data) {
      const json = await data.json();
      setRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  };

  useEffect(() => {
    console.log("useEffect called in body");
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center">
        <div>
          <input
            value={searchText}
            className="w-80 h-8 px-4 mr-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search you favourite restaurant"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search for restaurant
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res?.info?.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => {
          return (
            <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
              <RestaurantCard resCardDetails={res.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
