import React, { useEffect, useState } from 'react';
import Box from './Box';

const ProductCarousel = () => {
    const [productData,setproductData]=useState([])
    const getData =()=> {
        fetch("./FakeData/ProductSell.json")
        .then (response =>response.json())
        .then ( data=> setproductData(data))
    }
    useEffect (
        () =>{getData()},
        []
    )
    return (
        <div className='bg-red-700 py-2 rounded-lg mt-2 flex items-center'>
            {
                productData&&productData.map(
                (item)=> {
                    return ( < Box  {...item} key={item.id}/>)
                }

                )
            }
           
        </div>
    );
};

export default ProductCarousel;