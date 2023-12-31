import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";
import { removeFromBasket } from "../../redux/basketSlice";
import { useSelector } from "react-redux";

const Box = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const basketItems = useSelector((state) => state.basket.items);
  useEffect(() => {
    const index = basketItems.findIndex((item) => {
      return item.id === props.id;
    });
    if (index >= 0) {
      setQuantity(basketItems[index].count);
    } else setQuantity(0);
  }, [basketItems]);

  return (
    <div className="w-48 h-86 bg-white rounded-lg p-4 m-4 relative">
      <img
        className="h-36 m-auto"
        src={import.meta.env.VITE_BASE_URL + props.image.data.attributes.url}
        alt="image"
      />
      <h4>{props.title}</h4>
      <del className="text-gray-500">{props.oldprice}$</del>
      <span className="font-bold ml-6">{props.price}$</span>
      <span className="bg-red-600 text-white top-1 left-0 -rotate-45 rounded-md absolute">
        {props.discount}%
      </span>
      {quantity > 0 ? (
        <div className="flex items-center justify-center mt-2  p-2  ">
          <button
            className="flex items-center justify-center btn btn-sm btn-error ml-0"
            onClick={() => dispatch(removeFromBasket(props))}
          >
            -
          </button>
          <span className="text-sm bg-red-600 text-black mx-2 px-2 py-1 rounded flex items-center ">
            {quantity}
          </span>
          <button
            className="flex items-center justify-center btn btn-sm btn-error ml-0"
            onClick={() => dispatch(addToBasket(props))}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="btn btn-circle w-full mt-2"
          onClick={() => dispatch(addToBasket(props))}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Box;
