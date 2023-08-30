import React from "react";
import Carousel from "./../Components/Carousel";
import { Baner1 } from "./../Components/Baners";
import ProductCarousel from "./../Components/Products/ProductCarousel";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="px-[5%]">
        <Baner1 />
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Home;
