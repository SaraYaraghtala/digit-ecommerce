import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "../Components/Products/Box";

const Products = () => {
  const params = useParams();
  const [productData ,setProductData]=useState([])
  const getData = () => {
    fetch(
      import.meta.env.VITE_BASE_URL +
        "/api/products?populate=*&filters[categories][id][$eq]="+params.categoryId,
      { headers: { Authorization: "bearer " + import.meta.env.VITE_API_KEY } }
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.data);
       
      });
  };
  useEffect(() => getData(), []);
  return (
    <div className="flex items-center">
    {productData&&productData.map((item) => (
    
      <Box key={item.id} {...item.attributes} />
    
  ))}
  </div>

  ) 

};

export default Products;
