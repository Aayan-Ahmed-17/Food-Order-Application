import React, { useEffect, useState } from 'react'
import { MENU_API } from '../../utilis/constants';

const Brief = ({menu}) => {
  //* extract title and card from menu
  const [title, card] = [menu?.[0]?.card?.card?.header.title, menu?.[0]?.card?.card?.imageGridCards.info]

  // return (
    // <div>
    //   <h1>{listOfRestaurant?.header?.title}</h1>
    //   <ul>
    //     {listOfRestaurant?.imageGridCards?.info
    //     .map(restaurant =>
    //       <li key={restaurant.id}>{restaurant?.action?.text}</li>
    //     )}
    //   </ul>
    // </div>
  // )
}

export default Brief
