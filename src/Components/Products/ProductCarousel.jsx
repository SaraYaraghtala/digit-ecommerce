import React, { useEffect, useState } from "react";
import Box from "./Box";

const ProductCarousel = () => {
  const [productData, setproductData] = useState([]);
  const getData = () => {
    fetch("./FakeData/ProductSell.json")
      .then((response) => response.json())
      .then((data) => setproductData(data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="carousel  mt-4 max-w-full p-4 space-x-4  bg-red-700 rounded-lg">
      <div className="carousel-item relative " id="slide0">
        <a href="#slide0" className="btn btn-circle">
          ❮
        </a>
        <a href={"slide" + productData.length} className="btn btn-circle">
          ❯
        </a>
        <img
          src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="rounded-box"
        />
      </div>
      {productData &&
        productData.map((item) => {
          return (
            <div className="carousel-item relative" id={`slide${item.id}`}>
              <Box {...item} key={item.id} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductCarousel;
