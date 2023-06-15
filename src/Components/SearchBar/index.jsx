import React from "react";
import Card from "./Card";
import Search from "./Search";
import Login from "./Login";
import Logo from "./logo";

const SearchBar = () => {
  return (
    <div className="flex bg-pink-50 py-4 ">
      <Logo />
      <Search />
      <Login />
      <Card />
    </div>
  );
};

export default SearchBar;
