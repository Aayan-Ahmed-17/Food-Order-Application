import React, { useState, useEffect } from "react";
import { MENU_API } from "../../utilis/constants";

const TopRes = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API);
    const json = await res.json();

    console.log(json?.data?.cards[1]?.card?.card);
    setlistOfRestaurant(json?.data?.cards[1]?.card?.card);
  };

  return (
    <>
      <h1>{listOfRestaurant?.header?.title}</h1>
      <ul>
        {listOfRestaurant?.gridElements?.infoWithStyle?.restaurants
        .map(restaurant =>
          <li key={restaurant.info.id}>{restaurant.info.name}</li>
        )}
      </ul>
    </>
  );
};

export default TopRes;
