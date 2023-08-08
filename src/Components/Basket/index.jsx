import React from 'react';
import Item from './Item';
import { useSelector } from 'react-redux';

const Basket = () => {
    const basketItems = useSelector((state) => state.basket.items);
    return (
        <div>
            {basketItems.map((product)=>{
                return(
                    < Item {...product}/>
                )
            })}
        </div>
    );
};

export default Basket;