import React from 'react';

const Box = ({image,discount, oldprice, price, title}) => {
    return (
        <div className='w-48 h-64 bg-white rounded-lg p-4 m-4 relative'>
            <img src={import.meta.env.VITE_BASE_URL+image.data.attributes.url} alt="image" />
            <h4>{title}</h4>
            <del className='text-gray-500'>{oldprice}$</del>
            <span className='font-bold ml-6'>{price}$</span>
            <span className='bg-red-600 text-white top-1 left-0 -rotate-45 rounded-md absolute' >{discount}%</span>
            
        </div>
    );
};

export default Box;