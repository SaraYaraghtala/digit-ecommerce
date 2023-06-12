import React from "react";
import Card from "./Card";
import Search from "./Search";
import Login from "./Login";
import Logo from "./logo";


const SearchBar = () => {
  return (
    <div className="flex">
      <Card />
      <Login />
      <Search />
      <Logo />
      
    </div>
  );
};

export default SearchBar;
