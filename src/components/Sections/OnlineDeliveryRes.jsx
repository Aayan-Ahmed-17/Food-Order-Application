import React, { useEffect, useState } from "react";
import { MENU_API } from "../../utilis/constants";
import Card from "../Card";

const OnlineDeliveryRes = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API);
    const json = await res.json();
    console.log(json?.data?.cards[4]?.card?.card);
    setlistOfRestaurant(json?.data);
  };
  return (
    <section className="size-full">
      <div className="w-4/5 mx-auto">
        <h1>{listOfRestaurant?.cards?.[2]?.card?.card?.title}</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
          {listOfRestaurant?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
            (restaurant) => (
              <div
                key={restaurant.info.id}
                className="col-span-1"
              >
                <Card src={restaurant?.info?.cloudinaryImageId} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineDeliveryRes;
