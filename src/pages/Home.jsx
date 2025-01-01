import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import TopRes from "../components/Sections/TopRes";
import OnlineDeliveryRes from "../components/Sections/OnlineDeliveryRes";
import Brief from "../components/Sections/Brief";
import Navbar from "../components/Navbar";
import HorizontalScroll from "../components/Sections/HorizontalScroll";
import useFetchAllData from "../hooks/useFetchAllData";
// import useFetchRestaurants from "../hooks/useFetchRestaurants";

// definition of state react variable
// ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

const Home = () => {
  const { data, isLoading, isError } = useFetchAllData();
  const menu = data?.filter(
    (e) =>
      e.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
  );

  console.log(menu);
  console.log(data);

  return (
    <>
      <Navbar />
      <main className="flex flex-col size-full md:w-[90%] lg:w-[75%] md:mx-auto">
        <Brief menu={menu} />
        <hr className="border my-8"/>
        {/* <TopRes />
      <OnlineDeliveryRes /> */}
        {/* <HorizontalScroll /> */}
      </main>
    </>
  );
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
