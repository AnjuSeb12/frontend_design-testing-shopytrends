

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const OrderForm = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const location = useLocation();
    const navigate = useNavigate();
    const [orderItems, setOrderItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        if (location.state?.product) {
            const { product } = location.state;
            setOrderItems([{
                productId: product._id,
                image: product.image,
                title: product.title,
                quantity: 1,
                price: product.price,
                totalPrice: product.price
            }]);
        }
    }, [location.state?.product]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const items = [...orderItems];
        items[index][name] = value;

        if (name === 'quantity') {
            items[index].totalPrice = items[index].price * value;
        }

        setOrderItems(items);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await instance.post('/api/v1/orders/add', {
            orderItems: orderItems.map(item => ({
                productId: item.productId,
                title: item.title,
                image: item.image,
                quantity: item.quantity,
                price: item.price,
                totalPrice: item.totalPrice
            })),
            shippingAddress
        },
        { withCredentials: true });
        setClientSecret(data.clientSecret);
    };

    const handleCancel = () => {
        navigate(-1);
    };

    
    const containerClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
    const borderClass = isDarkMode ? 'border-green-800' : 'border-gray-200';
    const buttonClass = isDarkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700';
    const buttonTextClass = isDarkMode ? 'text-gray-100' : 'text-white';
    const inputBgClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
    const inputBorderClass = isDarkMode ? 'border-gray-600' : 'border-gray-200';

    return (
        <div className={`max-w-lg mx-auto p-4 shadow-md rounded-md mt-11 ${containerClass} `}>
            <h2 className="font-bold mb-4 text-green-600 text-center text-2xl">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                {orderItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-md mb-2"
                        />
                        <div className="flex items-center space-x-2">
                            <input
                                type="number"
                                name="quantity"
                                value={item.quantity}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Quantity"
                                className={`w-20 px-3 py-2 border rounded-md focus:outline-none focus:ring ${inputBorderClass} ${inputBgClass}`}
                            />
                            <p>Price: ₹{item.price.toFixed(2)}</p>
                            <p>Total: ₹{item.totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
                    <input
                        type="text"
                        name="address"
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                        placeholder="Address"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${inputBorderClass} ${inputBgClass} mb-2`}
                    />
                    <input
                        type="text"
                        name="city"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                        placeholder="City"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${inputBorderClass} ${inputBgClass} mb-2`}
                    />
                    <input
                        type="text"
                        name="postalCode"
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                        placeholder="Postal Code"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${inputBorderClass} ${inputBgClass} mb-2`}
                    />
                    <input
                        type="text"
                        name="country"
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                        placeholder="Country"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${inputBorderClass} ${inputBgClass}`}
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full px-4 py-2 rounded-md ${buttonClass} ${buttonTextClass}`}
                >
                    Place Order
                </button>
                <button
                    type="button"
                    onClick={handleCancel}
                    className={`w-full px-4 py-2 rounded-md ${buttonClass} ${buttonTextClass} mt-2`}
                >
                    Cancel
                </button>
            </form>
            {clientSecret && (
                <PaymentForm clientSecret={clientSecret} />
            )}
        </div>
    );
};

export default OrderForm;

