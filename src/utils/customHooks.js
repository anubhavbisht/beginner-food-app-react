import { useState, useEffect } from "react";
import { restaurantMenuUrl } from "./constants";

export const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(restaurantMenuUrl + restaurantId);
    if (data) {
      const json = await data.json();
      setResInfo(json.data);
    }
  };
  useEffect(() => {
    console.log("Use effect called in useRestaurantMenu hook");
    fetchMenu();
  }, []);
  return resInfo;
};

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      setShowPopup(true);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    });
  }, []);

  return { networkStatus: onlineStatus, popupVisibility: showPopup };
};
