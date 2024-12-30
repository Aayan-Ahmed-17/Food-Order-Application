import React from "react";
import useFetchAllData from "./useFetchAllData";

const useFetchRestaurants = () => {
  const res = useFetchAllData();
  const restaurants = res?.data?.filter(
    (menu) =>
      menu.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
  );
  return restaurants;
};

export default useFetchRestaurants;
