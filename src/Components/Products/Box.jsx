import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, } from '../../redux/basketSlice';

const Box = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-48 h-86 bg-white rounded-lg p-4 m-4 relative">
      <img className="h-36 m-auto"
        src={import.meta.env.VITE_BASE_URL + props.image.data.attributes.url}
        alt="image"
      />
      <h4>{props.title}</h4>
      <del className="text-gray-500">{props.oldprice}$</del>
      <span className="font-bold ml-6">{props.price}$</span>
      <span className="bg-red-600 text-white top-1 left-0 -rotate-45 rounded-md absolute">
        {props.discount}%
      </span>
      <button className="btn btn-success w-full" onClick={()=>dispatch(addToBasket(props))}>Add to card</button>
    </div>
  );
};

export default Box;
