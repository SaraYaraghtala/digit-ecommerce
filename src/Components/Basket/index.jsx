import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../redux/basketSlice";
import { addToBasket } from "../../redux/basketSlice";
import { useForm } from "react-hook-form";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  // const calculateTotalQuantity = (productId, basketItems) => {
  //   const productItem = basketItems.find((item) => item.id === productId);
  //   return productItem ? productItem.quantity : 0;
  // };

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
        addOrderItem(item, orderId);
      }
    }else console.log("orderId:"+orderId)
  };

  const addOrder = async (data) => {
    try {
      const formData = {
        data: {
          email: data.email,
          address: data.address,
          totalprice: data.totalprice,
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
      <div className="overflow-x-auto border rounded-lg border-gray-300 p-4">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="w-1/12">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="w-3/12">Title</th>
              <th className="w-2/12">Image</th>
              <th className="w-2/12">Discount</th>
              <th className="w-2/12">Price</th>
              <th className="w-2/12">Delete item </th>
            </tr>
          </thead>
          <tbody>
            {[...basketItems]
              .sort((a, b) => b.discount - a.discount)
              .map((product, index) => (
                <tr key={index} className={`${index !== 0 ? "border-t" : ""}`}>
                  <td className="w-1/12">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td className="w-3/12">{product.title}</td>
                  <td>
                    <img
                      src={
                        import.meta.env.VITE_BASE_URL +
                        product.image.data.attributes.url
                      }
                      alt="Product"
                      className="w-2/12 h-12 mask mask-squircle"
                    />
                  </td>
                  <td className="w-2/12">{product.discount}</td>
                  <td className="w-2/12">{product.price}</td>
                  <td className="w-2/12">
                    <div className="flex items-center justify-center mt-2 p-2">
                      <button
                        className="btn btn-sm btn-error ml-0"
                        onClick={() => dispatch(addToBasket(product))}
                      >
                        +
                      </button>
                      <span className="text-sm bg-red-600 text-black mx-2 px-2 py-1 rounded flex items-center">
                        {product.count}
                      </span>
                      <button
                        className="btn btn-sm btn-error ml-0"
                        onClick={() => dispatch(removeFromBasket(product))}
                      >
                        -
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
            <div className="w-1/2 ml-2">
              <input
                {...register("totalprice")}
                type="number"
                placeholder="Total Price"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <input
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default Basket;
