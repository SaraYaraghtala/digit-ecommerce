import React from 'react';
import SearchIcon from "../../assets/search.svg"

const Search = () => {
    return (
        <div className='bg-[#eee] w-1/2 h-12 rounded-lg flex items-center pl-2 '>
            <input className='py-2 w-5/6 bg-[#eee] focus:outline-none' type="text" placeholder='Search...' />
            <img className='h-[70%] ml-auto hover:cursor-pointer' src={SearchIcon} alt="" />
        </div>
    );
};

export default Search;