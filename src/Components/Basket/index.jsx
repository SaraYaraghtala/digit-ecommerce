import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToBasket ,clearBasket,removeFromBasket } from "../../redux/basketSlice";
import { useForm } from "react-hook-form";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderId, setOrderId] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    for (let item of basketItems) {
      total = total + item.price * item.count;
    }
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [basketItems]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const orderId = await addOrder(data);
    if (orderId > -1) {
      for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];
        await addOrderItem(item, orderId);
      }
      dispatch(clearBasket())
    } else console.log("orderId:" + orderId);
  };

  const addOrder = async (data) => {
    try {
      const formData = {
        data: {
          email: data.email,
          address: data.address,
          totalprice: totalPrice,
          username: data.username,
        },
      };

      const response = await fetch(
        import.meta.env.VITE_BASE_URL + "/api/orders",
        {
          method: "POST",
          headers: {
            Authorization: "bearer " + import.meta.env.VITE_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setOrderId(result.data.id);
        return result.data.id;
      } else {
        return -1;
      }
    } catch (error) {
      return -1;
    }
  };

  const addOrderItem = async (data, orderId) => {
    try {
      const formData = {
        data: {
          title: data.title,
          discount: data.discount,
          price: data.price,
          count: data.count,
          order: orderId,
        },
      };

      console.log(formData);

      const response = await fetch(
        import.meta.env.VITE_BASE_URL + "/api/order-items",
        {
          method: "POST",
          headers: {
            Authorization: "bearer " + import.meta.env.VITE_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Data successfully posted to Strapi:", result);
      } else {
        console.error("Error posting data to Strapi:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting data to Strapi:", error);
    }
  };

  return (
    <div className="px-12 mt-4">
      {orderId === 0 ? (
        <div>
          <div className="overflow-x-auto border rounded-lg border-gray-300 p-4">
            <table className="w-full table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Discount</th>
                  <th>Fee</th>
                  <th>Price</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {[...basketItems]
                  .sort((a, b) => b.discount - a.discount)
                  .map((product, index) => (
                    <tr
                      key={index}
                      className={`${index !== 0 ? "border-t" : ""}`}
                    >
                      <td className="w-3/12">{product.title}</td>
                      <td>
                        <img
                          src={
                            import.meta.env.VITE_BASE_URL +
                            product.image.data.attributes.url
                          }
                          alt="Product"
                          className="w-12 h-12 mask mask-squircle"
                        />
                      </td>
                      <td>{product.discount}</td>
                      <td>{product.price}</td>
                      <td>{product.price * product.count}</td>
                      <td>
                        <div className="flex mt-2 p-2">
                          <button
                            className="btn btn-sm btn-error ml-0"
                            onClick={() => dispatch(removeFromBasket(product))}
                          >
                            -
                          </button>
                          <span className="text-sm bg-red-600 text-black mx-2 px-2  rounded-md flex items-center">
                            {product.count}
                          </span>
                          <button
                            className="btn btn-sm btn-error ml-0"
                            onClick={() => dispatch(addToBasket(product))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div>
              {" "}
              <h1> Total price :{totalPrice}</h1>
            </div>
          </div>
          <div className="px-12 mt-8 border rounded-md shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <input
                    {...register("username")}
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <input
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                value="Check Out"
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span> Successfully Checkout your orderId is {orderId}</span>
        </div>
      )}
    </div>
  );
};

export default Basket;
