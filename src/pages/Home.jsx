import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import { MENU_API } from "../utilis/constants";

// definition of state react variable
// ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

const Home = () => {
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
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    )
  };

  // conditional rendering - Rendering on the basis of Condition
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length > 0 &&(

    <div className="min-h-screen">
      <div className="">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );

};

export default Home;
