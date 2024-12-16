import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import { MENU_API } from "../utilis/constants";
import TopRes from "../components/Sections/TopRes";
import OnlineDeliveryRes from "../components/Sections/OnlineDeliveryRes";
import Brief from "../components/Sections/Brief";
import Navbar from "../components/Navbar";

// definition of state react variable
// ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

const Home = () => {
  // const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch(MENU_API);
  //   const json = await res.json();

  //   console.log(
  //     json?.data?.cards[0]?.card?.card
  //   );
  //   setlistOfRestaurant(
  //     json?.data?.cards[0]?.card?.card?.imageGridCards?.info
  //   )
  // };
  
  return (
    <>
      <Navbar />
      <Brief />
      <TopRes />
      <OnlineDeliveryRes />
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