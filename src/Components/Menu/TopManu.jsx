import React from 'react';
import BestIcon from "../../assets/bestseller.svg"
import DiscountIcon from "../../assets/discount.svg"
import OffersIcon from "../../assets/offers.svg"
import { Link } from "react-router-dom";

const TopManu = () => {
    return (
        <div className=' h-8 flex items-center'>
            <div className='divider  divider-horizontal'></div>
            <Link to={`contacts/1`} className='flex items-center h-8 pr-4 '>
                <img className='h-[70%]' src={BestIcon} alt="" />
                Best Seller
            </Link>
            <Link to={`contacts/1`} className='flex items-center h-8 pr-4 '>
                <img className='h-[70%]' src={DiscountIcon} alt="" />
                OUTLET%
            </Link>
            <Link to={`contacts/1`} className='flex items-center h-8 pr-4'>
                <img className='h-[70%] mr-1' src={OffersIcon} alt="" />
                Offers
            </Link>
            <div className='divider  divider-horizontal'></div>
            <Link to={`contacts/1`} className='flex items-center h-8 pr-4 '>
                contract us?
            </Link>
            <Link to={`about`} className='flex items-center h-8 pr-4 '>
                About
            </Link>
           
        </div>
    );
};

export default TopManu;