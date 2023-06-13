import React from "react";
import CardIcon from "../../assets/card.svg";

const Card = () => {
  return (
    <div className=" flex items-center w-1/6 h-12 relative ">
      <a href="#" className=" block h-[70%] pl-30">
        <img className="h-[90%] " src={CardIcon} alt="" />
        <span className="bg-[#EE384E] rounded-full absolute  -top-2 left-2 px-1 text-white">
          10
        </span>
      </a>
    </div>
  );
};

export default Card;
