import React, { useEffect, useState } from "react";
import { MENU_API } from "../utilis/constants";

const fetchData = () => {
  const [states, setStates] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  useEffect(async () => {
    try {
      const res = await fetch(MENU_API);
      const data = await res.json();
      setStates((prev) => ({ ...prev, data, isLoading: false }));
    } catch (err) {
      setStates((prev) => ({ ...prev, isError: err, isLoading: false }));
    }
  }, []);

  return states
};

export default fetchData
