import React, { useEffect, useState } from 'react'
import { MENU_API } from '../../utilis/constants';

const OnlineDeliveryRes = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const res = await fetch(MENU_API);
      const json = await res.json();
        console.log(json?.data?.cards[2]?.card?.card?.title)
      setlistOfRestaurant(
        json?.data
      )
    };
  return (
    <div>
      <h1>{listOfRestaurant?.cards?.[2]?.card?.card?.title}</h1>
    </div>
  )
}

export default OnlineDeliveryRes
