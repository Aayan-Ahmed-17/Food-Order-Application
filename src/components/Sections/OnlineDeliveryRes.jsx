import React, { useEffect, useState } from 'react'
import { MENU_API } from '../../utilis/constants';
import Card from '../Card';

const OnlineDeliveryRes = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const res = await fetch(MENU_API);
      const json = await res.json();
        console.log(json?.data?.cards[4]?.card?.card)
      setlistOfRestaurant(
        json?.data
      )
    };
  return (
    <div>
      <h1>{listOfRestaurant?.cards?.[2]?.card?.card?.title}</h1>
      <ul className='grid grid-cols-12 gap-3'>
        {listOfRestaurant?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        .map(restaurant =>
          <li key={restaurant.info.id} className='col-span-3 border border-black'>
            <Card src={restaurant?.info?.cloudinaryImageId}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default OnlineDeliveryRes
