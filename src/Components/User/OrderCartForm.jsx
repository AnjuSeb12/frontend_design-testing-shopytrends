
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const OrderForm = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const location = useLocation();
    const [orderItems, setOrderItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const [clientSecret, setClientSecret] = useState('');
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (location.state?.cartItems) {
            const items = location.state.cartItems.map(item => ({
                productId: item.product._id,
                title: item.product.title,
                image: item.product.image,
                quantity: item.quantity,
                price: item.product.price,
                totalPrice: item.totalPrice
            }));
            setOrderItems(items);

            const totalQty = items.reduce((acc, item) => acc + item.quantity, 0);
            const totalPrice = items.reduce((acc, item) => acc + item.totalPrice, 0);
            setTotalQuantity(totalQty);
            setTotalPrice(totalPrice);
        }
    }, [location.state?.cartItems]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const items = [...orderItems];
        items[index][name] = value;
        setOrderItems(items);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await instance.post('/api/v1/orders/add', {
                orderItems,
                shippingAddress
            }, { withCredentials: true });
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    const containerClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';
    const borderClass = isDarkMode ? 'border-gray-600' : 'border-gray-200';
    const buttonClass = isDarkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700';
    const buttonTextClass = isDarkMode ? 'text-gray-100' : 'text-white';
    const inputBgClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
    const inputBorderClass = isDarkMode ? 'border-gray-600' : 'border-gray-200';

    return (
        <div className={`max-w-4xl mx-auto p-4 rounded-md shadow-md sm:p-6 md:p-8 lg:p-10 ${containerClass}`}>
            <h2 className="text-xl font-bold mb-4 sm:text-2xl md:text-3xl lg:text-4xl text-black">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {orderItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-auto object-cover rounded-md sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        />
                        <div className="flex-1">
                            <h3 className={`font-semibold text-sm sm:text-base lg:text-lg ${isDarkMode ? 'text-gray-100' : 'text-black'}`}>{item.title}</h3>
                            <p className={`text-xs sm:text-sm lg:text-base ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Quantity: {item.quantity}</p>
                            <p className={`text-xs sm:text-sm lg:text-base ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Total Price: ${item.totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    <input
                        type="text"
                        name="address"
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                        placeholder="Shipping Address"
                        className={`w-full px-3 py-2 border rounded-md ${inputBgClass} ${inputBorderClass} focus:outline-none focus:ring focus:ring-blue-200 sm:px-4 sm:py-3 lg:px-5 lg:py-4`}
                    />
                    <input
                        type="text"
                        name="city"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                        placeholder="City"
                        className={`w-full px-3 py-2 border rounded-md ${inputBgClass} ${inputBorderClass} focus:outline-none focus:ring focus:ring-blue-200 sm:px-4 sm:py-3 lg:px-5 lg:py-4`}
                    />
                    <input
                        type="text"
                        name="postalCode"
                        value={shippingAddress.postalCode}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                        placeholder="Postal Code"
                        maxLength="10"
                        className={`w-full px-3 py-2 border rounded-md ${inputBgClass} ${inputBorderClass} focus:outline-none focus:ring focus:ring-blue-200 sm:px-4 sm:py-3 lg:px-5 lg:py-4`}
                    />
                    <input
                        type="text"
                        name="country"
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                        placeholder="Country"
                        className={`w-full px-3 py-2 border rounded-md ${inputBgClass} ${inputBorderClass} focus:outline-none focus:ring focus:ring-blue-200 sm:px-4 sm:py-3 lg:px-5 lg:py-4`}
                    />
                </div>
                <div className={`font-bold text-lg sm:text-xl lg:text-2xl ${isDarkMode ? 'text-gray-100' : 'text-black'}`}>
                    <p>Total Quantity: {totalQuantity}</p>
                    <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
                </div>
                <button type="submit" className={`w-full px-3 py-2 rounded-md ${buttonClass} ${buttonTextClass} focus:outline-none focus:ring focus:ring-blue-200 sm:px-4 sm:py-3 lg:px-5 lg:py-4`}>
                    Continue to Payment
                </button>
            </form>
            {clientSecret && <PaymentForm clientSecret={clientSecret} />}
        </div>
    );
};

export default OrderForm;

