import React, { useEffect, useState } from "react";
import Box from "./Box";

const ProductCarousel = () => {
  const [productData, setProductData] = useState([]);
  const getData = () => {
    fetch(
      import.meta.env.VITE_BASE_URL +
        "/api/products?populate=image&filters[showincarousel][$eq]=true",
      { headers: { Authorization: "bearer " + import.meta.env.VITE_API_KEY } }
    )
      .then((response) => response.json())
      .then((result) => {
        setProductData(result.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const goToPrevSlide = () => {
    const tempData = [...productData];
    const item = tempData.pop();
    tempData.unshift(item);
    setProductData(tempData);
  };

  const goToNextSlide = () => {
    const tempData = [...productData];
    const item = tempData.shift();
    tempData.push(item);
    setProductData(tempData);
  };
  return (
    <div className=" mt-4 max-w-full p-4 space-x-4 bg-red-700 rounded-lg flex items-center overflow-hidden">
      <button
        className="btn btn-circle z-50 float-left"
        onClick={goToPrevSlide}
      >
        ❮
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {productData &&
          productData.map((item) => (
            <div className="relative" id={`slide${item.id}`} key={item.id}>
              <Box {...item.attributes} id={item.id} />
            </div>
          ))}
      </div>

      <button
        className="btn btn-circle z-50 float-right"
        onClick={goToNextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ProductCarousel;
