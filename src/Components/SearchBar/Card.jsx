import React from "react";
import CardIcon from "../../assets/card.svg";

const Card = () => {
  return (
    <div className="flex items-center w-1/6 h-12 ">
      <a href="#" className=" h-[120%] pl-30">
        <img className="h-[90%] " src={CardIcon} alt="" />
      </a>
    </div>
  );
};

export default Card;
