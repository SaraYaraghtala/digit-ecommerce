import React, { useEffect, useState } from "react";
import Product from "./Product";

const Baner1 = () => {
  const [BanerData, setBanerData]=useState([])
  const getData = () => {
    fetch(import.meta.env.VITE_BASE_URL+"/api/products?populate=image&filters[showinbaner][$eq]=true",{headers: {"Authorization": "bearer "+import.meta.env.VITE_API_KEY}
  })
      .then((response) => response.json())
      .then((result) => {setBanerData(result.data)
      console.log(result.data)});
  };
   useEffect(
    ()=>{getData()},
    []
   )
  return (
    <div className="w-full  flex items-center h-32 bg-no-repeat bg-[#EEF1EF] rounded-lg bg-[url('./images/background/freshPattern.svg')]">
      <div className="flex items-center h-32 w-2/6">
        <img className="ml-10" src="./images/background/fresh.png" alt="fresh" />
        <h1 className="font-bold text-green-800 ">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
      
      <div className=" w-3/6 flex">
      {
      BanerData&&BanerData.map(
      (item)=>{
        return(<Product {...item.attributes} key={item.id}/>)
      }
     )
     }
     </div>
      <div className="w-1/6  flex">
        <button className="bg-white  text-green-800 p-4 rounded-3xl font-bold ">
          Show more....
        </button>
      </div>
      
    </div>
  );
};

export default Baner1;
