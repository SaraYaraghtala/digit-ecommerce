import React from "react";
import CardIcon from "../../assets/card.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = () => {
  const basketItems = useSelector((state) => state.basket.items);
  return (
    <div className=" flex items-center w-1/6 h-12 relative ">
      <Link to={`checkout`} className=" block h-[70%] pl-30">
        <img className="h-[90%] " src={CardIcon} alt="" />
        <span className="bg-[#EE384E] rounded-full absolute  -top-2 left-2 px-1 text-white">
          {basketItems.length}
        </span>
      </Link>
    </div>
  );
};

export default Card;
