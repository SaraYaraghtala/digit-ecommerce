import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../Components/Products/Box";

const Products = () => {
  const params = useParams();
  const [productData ,setProductData]=useState([])
  const [message ,setMessage]= useState("Not find")
  const getData = () => {
    setMessage("Loding");
    setProductData([]);
    fetch(
      import.meta.env.VITE_BASE_URL +
        "/api/products?populate=*&filters[categories][id][$eq]="+params.categoryId,
      { headers: { Authorization: "bearer " + import.meta.env.VITE_API_KEY } }
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.data);
        if (result.data.length<1){
          setMessage("Not find")
        }
      })
      .catch( ()=>{
        setMessage("somthing was wrongt")
      })
      ;
  };
  useEffect(() => getData(), [params.categoryId]);
  return (
    <div className="flex items-center">
    {productData.length > 0 ? productData.map((item) => (
    
      <Box key={item.id} {...item.attributes} />
    
  )):message}
  </div>

  ) 

};

export default Products;
