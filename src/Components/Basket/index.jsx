import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeFromBasket, } from '../../redux/basketSlice';

const Basket = () => {
    const basketItems = useSelector((state) => state.basket.items);
    const dispatch = useDispatch();

    return (
        <div className="overflow-x-auto">
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
                        <th className="w-2/12"></th>
                    </tr>
                </thead>
                <tbody>
                    {basketItems.map((product, index) => (
                        <tr key={index} className={`${index !== 0 ? 'border-t' : ''}`}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>{product.title}</td>
                            <td>
                                <img
                                  src={import.meta.env.VITE_BASE_URL + product.image.data.attributes.url}
                                    alt="Product"
                                    className="w-12 h-12 mask mask-squircle"
                                />
                            </td>
                            <td>{product.discount}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs" onClick={()=>dispatch(removeFromBasket(product))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Basket;
