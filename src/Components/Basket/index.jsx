import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../redux/basketSlice";
import { addToBasket } from "../../redux/basketSlice";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  const calculateTotalQuantity = (productId, basketItems) => {
    const productItem = basketItems.find((item) => item.id === productId);
    return productItem ? productItem.quantity : 0;
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
    </div>
  );
};

export default Basket;
