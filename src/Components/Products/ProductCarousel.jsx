
import React, { useEffect, useState } from "react";
import Box from "./Box";

const ProductCarousel = () => {
    const [productData, setProductData] = useState([]);
    const getData = () => {
        fetch("http://localhost:1337/api/products?populate=image",{headers: {"Authorization": "bearer 42a362acbd86254738d33a7aff586390b820e502bd1fe1f8a420a4de3ae834c5cf807a30bae9f1909dbbdb98381aac40b19967b86c559a5a471e00841a6a356760f7850a79741fdd8a945cad6e588eed989ae4e0ee4557cec742b94074059217bc16baa8c9e7d8cc994609e4db5ed677267846070309bc12200ca15b03160eb1"}
      })
          .then((response) => response.json())
          .then((result) => {setProductData(result.data)
          console.log(result.data)});
      };
    
      useEffect(() => {
        getData();
      }, []);
      const goToPrevSlide = () => {
        const tempData= [...productData]
        const item = tempData.pop()
        tempData.unshift(item)
        setProductData (tempData)
      };
    
      const goToNextSlide = () => {
        const tempData= [...productData]
        const item= tempData.shift()
        tempData.push(item)
        setProductData(tempData)
       
      };
    return (
        <div className=" mt-4 max-w-full p-4 space-x-4 bg-red-700 rounded-lg flex items-center overflow-hidden">
        <button className="btn btn-circle z-50 float-left" onClick={goToPrevSlide}>
          ❮
        </button>
        <div className="flex space-x-4 overflow-hidden"> 
         {productData&&productData.map((item) => (
          <div className="relative" id={`slide${item.id}`} key={item.id}>
            <Box {...item.attributes} />
          </div>
        ))}
        </div>
      
        <button className="btn btn-circle z-50 float-right" onClick={goToNextSlide}>
          ❯
        </button>
      </div>
    );
};

export default ProductCarousel;
