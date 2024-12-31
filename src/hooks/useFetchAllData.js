//* my prev code
// import React, { useEffect, useState } from "react";
// import { MENU_API } from "../utilis/constants";

// const useFetchAllData = () => {
  //   const [states, setStates] = useState({
    //     data: null,
    //     isLoading: true,
    //     isError: false,
    //   });
    
    //   useEffect(() => {
      //     async function fetchData() {
        //       try {
          //         const res = await fetch(MENU_API);
          //         const data = await res.json();
          //         setStates((prev) => ({
            //           ...prev,
            //           data: data?.data?.cards,
            //           isLoading: false,
            //         }));
            //       } catch (err) {
              //         setStates((prev) => ({ ...prev, isError: err, isLoading: false }));
//       }
//     }
//     fetchData();
//   }, []);

//   return states;
// };

// export default useFetchAllData;

//* my enchanced code
import React, { useEffect, useState } from "react";
import { MENU_API } from "../utilis/constants";

const useFetchAllData = () => {
  const [allData, setAllData] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });
  
  const [menu, setMenu] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(MENU_API);
        const json = await res.json();
        setAllData({
          data: json?.data?.cards,
          isLoading: false,
          isError: false,
        });
      } catch (err) {
        setAllData({
          data: null,
          isError: err,
          isLoading: false,
        });
      }
    };
    
    fetchData();
  }, []);
  
  return allData;
};

export default useFetchAllData;
