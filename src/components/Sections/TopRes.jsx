import React, { useState, useEffect } from "react";
import { MENU_API } from "../../utilis/constants";
import Card from "../Card";

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
    <section className="container">
      <div className="w-4/5 mx-auto">
        <header className="flex justify-between items-center py-2 mx-auto bg-purple-500">
          <h1 className="text-lg font-bold tracking-tight">
            {listOfRestaurant?.header?.title}
          </h1>

          <div className="hidden md:flex px-3 bg-red-500 size-auto gap-3">
            <button>&lt;-</button>
            <button>-&gt;</button>
          </div>
        </header>
        <ul className="grid grid-cols-12 gap-3">
          {listOfRestaurant?.gridElements?.infoWithStyle?.restaurants.map(
            (restaurant) => (
              <li key={restaurant.info.id} className="col-span-3 border-black border">
                <Card src={restaurant.info.cloudinaryImageId}/>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default TopRes;
