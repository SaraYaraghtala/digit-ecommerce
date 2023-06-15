import React from 'react';
import BestIcon from "../../assets/bestseller.svg"
import DiscountIcon from "../../assets/discount.svg"
import OffersIcon from "../../assets/offers.svg"

const TopManu = () => {
    return (
        <div className=' h-8 flex items-center'>
            <div className='divider  divider-horizontal'></div>
            <a href="#" className='flex items-center h-8 pr-4 '>
                <img className='h-[70%]' src={BestIcon} alt="" />
                Best Seller
            </a>
            <a href="#" className='flex items-center h-8 pr-4 '>
                <img className='h-[70%]' src={DiscountIcon} alt="" />
                OUTLET%
            </a>
            <a href="#" className='flex items-center h-8 pr-4'>
                <img className='h-[70%] mr-1' src={OffersIcon} alt="" />
                Offers
            </a>
            <div className='divider  divider-horizontal'></div>
            <a href="#" className='flex items-center h-8 pr-4 '>
                contract us?
            </a>
            
        </div>
    );
};

export default TopManu;