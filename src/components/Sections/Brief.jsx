import React, { useEffect, useState } from 'react'
import { MENU_API } from '../../utilis/constants';

const Brief = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API);
    const json = await res.json();

    console.log(
      json?.data?.cards[0]?.card?.card
    );
    setlistOfRestaurant(
      json?.data?.cards[0]?.card?.card
    )
  };
  return (
    <div>
      <h1>{listOfRestaurant?.header?.title}</h1>
      <ul>
        {listOfRestaurant?.imageGridCards?.info
        .map(restaurant =>
          <li key={restaurant.id}>{restaurant?.action?.text}</li>
        )}
      </ul>
    </div>
  )
}

export default Brief
