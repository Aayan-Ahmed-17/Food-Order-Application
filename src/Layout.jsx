import React, { useEffect, useState } from "react";

const Layout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return <>{data && data.map((e) => <li key={e.info.id}>{e.info.name}</li>)}</>;
};

export default Layout;
