
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ clientSecret }) => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setIsProcessing(true);
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (stripeError) {
            setError(stripeError.message);
            setIsProcessing(false);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            try {
                const response = await instance.post(
                    '/api/v1/orders/verify-payment',
                    { paymentIntentId: paymentIntent.id },
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (response.status === 200) {
                    window.location.href = '/order-success'; 
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                setError('Error verifying payment');
            }
        }
        setIsProcessing(false);
    };

    const formClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
    const buttonClass = isDarkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700';
    const errorClass = isDarkMode ? 'text-red-400' : 'text-red-500';

    
    const cardElementOptions = {
        style: {
            base: {
                color: isDarkMode ? '#ffffff' : '#000000', 
                backgroundColor: isDarkMode ? '#333333' : '#ffffff', 
                borderColor: isDarkMode ? '#666666' : '#cccccc', 
                fontSize: '16px',
                '::placeholder': {
                    color: isDarkMode ? '#888888' : '#cccccc', 
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
    };

    return (
        <form onSubmit={handleSubmit} className={`mt-4 p-4 rounded-md shadow-md ${formClass}`}>
            <CardElement options={cardElementOptions} />
            {error && <div className={`mt-2 ${errorClass}`}>{error}</div>}
            <button
                type="submit"
                className={`w-full px-4 py-2 rounded-md ${buttonClass} text-white mt-4`}
                disabled={isProcessing}
            >
                {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

const PaymentFormWrapper = ({ clientSecret }) => (
    <Elements stripe={stripePromise}>
        <PaymentForm clientSecret={clientSecret} />
    </Elements>
);

export default PaymentFormWrapper;


