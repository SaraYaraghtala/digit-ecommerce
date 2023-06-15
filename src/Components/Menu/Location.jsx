import React from 'react';
import LocationIcon from "../../assets/location.svg"

const Location = () => {
    return (
        <div className=' flex ml-auto h-8 pr-5'>
            <img className='h-[70%] mr-1' src={LocationIcon} alt="logo" />
            <a href="">Please select your city</a>
        </div>
    );
};

export default Location;