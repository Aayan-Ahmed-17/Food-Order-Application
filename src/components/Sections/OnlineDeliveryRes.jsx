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
        <div className="grid xl:grid-cols-12 md:grid-cols-9 sm:grid-cols-7 grid-cols-3 gap-3">
          {listOfRestaurant?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
            (restaurant) => (
              <div
                key={restaurant.info.id}
                className="md:col-span-3 sm:col-span-3 col-span-3"
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
