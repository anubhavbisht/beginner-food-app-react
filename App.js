import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import food from "./assets/food.jpeg";
import "./index.css";
import { restaurantList, IMG_CDN_URL } from "./utils/constants";

const HeadingComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resCardDetails } = props;
  const { data } = resCardDetails;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = data;
  return (
    <div className="res-card">
      <img className="res-logo" src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} ⭐️</h3>
      <h3>🚴🏽‍♂️ {deliveryTime} mins</h3>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((res) => {
          return <RestaurantCard key={res.data.id} resCardDetails={res} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeadingComponent />
      <BodyComponent />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
