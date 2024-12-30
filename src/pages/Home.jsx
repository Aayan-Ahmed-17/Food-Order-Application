import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import { MENU_API } from "../utilis/constants";
import TopRes from "../components/Sections/TopRes";
import OnlineDeliveryRes from "../components/Sections/OnlineDeliveryRes";
import Brief from "../components/Sections/Brief";
import Navbar from "../components/Navbar";
import HorizontalScroll from "../components/Sections/HorizontalScroll";
import Temp from "../components/Sections/Temp";

// definition of state react variable
// ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

const Home = () => {
  
  return (
    <>
      <Navbar />
      <Brief />
      {/* <TopRes />
      <OnlineDeliveryRes /> */}
      <HorizontalScroll />
      <Temp />
      
    </>
  )
  // listOfRestaurant.length > 0 &&(

  //   <div className="min-h-screen">
  //     <div className="">
  //       {listOfRestaurant.map((restaurant) => (
  //         <RestaurantCard key={restaurant.id} resData={restaurant} />
  //       ))}
  //     </div>
  //   </div>
  

};

export default Home;
