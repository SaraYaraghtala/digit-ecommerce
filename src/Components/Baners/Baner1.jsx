import React from 'react';
import Product from './Product';

const Baner1 = () => {
    return (
        <div className="w-full  flex items-center h-32 bg-no-repeat bg-[#EEF1EF] rounded-lg bg-[url('./images/background/freshPattern.svg')]">
            < Product  discount={10} image="./images/product/product.jpg"/>
            < Product  discount={15}image="./images/product/product.jpg"/>
            < Product  discount={10}image="./images/product/product.jpg"/>
            < Product discount={20} image="./images/product/product.jpg"/>
            < Product discount={50} image="./images/product/product.jpg"/>
            < Product discount={80} image="./images/product/product.jpg"/>
        </div>
    );
};

export default Baner1;