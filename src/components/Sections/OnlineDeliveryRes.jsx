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
  
      setlistOfRestaurant(
        json?.data?.cards[2]?.card?.card?.title
      )
    };
  return (
    <div>
      {listOfRestaurant}
    </div>
  )
}

export default OnlineDeliveryRes
