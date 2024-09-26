
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const containerClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';
    const headingClass = isDarkMode ? 'text-gray-100' : 'text-black';
    const paragraphClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const linkClass = isDarkMode ? 'text-green-300 hover:underline' : 'text-green-500 hover:underline';

    return (
        <div className={`max-w-lg mx-auto p-4 shadow-md rounded-md text-center ${containerClass}`}>
            <h2 className={`text-xl font-bold mb-4 ${headingClass}`}>Order Successful</h2>
            <p className={`mb-4 ${paragraphClass}`}>Thank you for your order! Your payment has been processed successfully.</p>
            <Link to="/" className={linkClass}>
                Return to Home
            </Link>
        </div>
    );
};

export default OrderSuccess;
