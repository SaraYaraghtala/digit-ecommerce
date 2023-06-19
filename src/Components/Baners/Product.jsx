import React from 'react';

const Product = ({discount ,image}) => {
    return (
        <div className="relative h-24 w-24 bg-white rounded-full mx-2 z-10" >
            <span className="bg-red-600 text-white bottom-0 right-0 rounded-md absolute z-30">
                {discount}%

            </span>
            <img className='h-[80%] rounded-full absolute left-2 top-2 z-20' src={image} alt="product" />
        </div>
    );
};

export default Product;