// import React, { useEffect, useState } from 'react';
// import instance from '../../axios';

// const SellerOrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const token = localStorage.getItem('sellerToken'); // Get the token from local storage

//             if (!token) {
//                 setError('No authentication token found.');
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await instance.get('/api/v1/orders/seller/orders', {
//                     // headers: {
//                     //     Authorization: `Bearer ${token}` // Include the token in the request
//                     // }
//                     withCredentials: true,
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//                 setOrders(response.data.orders);
//             } catch (error) {
//                 console.error('Error fetching seller orders:', error);
//                 setError('Failed to fetch orders. Please try again later.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div className="text-red-500">{error}</div>;

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-semibold text-center mb-8">Your Sales</h1>
//             {orders.length > 0 ? (
//                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border rounded-lg shadow-lg p-4">
//                             <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
//                             <p>Ordered by: {order.user.firstName} {order.user.lastName}</p>
//                             <p>Total Items: {order.orderItems.length}</p>
//                             <p>Payment Status: {order.paymentStatus}</p>
//                             <div>
//                                 {order.orderItems.map((item) => (
//                                     <div key={item.productId._id} className="flex items-center">
//                                         <img src={item.productId.image} alt={item.productId.title} className="w-20 h-20 object-cover" />
//                                         <div className="ml-4">
//                                             <h3 className="text-lg">{item.productId.title}</h3>
//                                             <p>Quantity: {item.quantity}</p>
//                                             <p>Price: ₹{item.price}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>No orders found for your products.</p>
//             )}
//         </div>
//     );
// };

// export default SellerOrderList;


import React, { useEffect, useState } from 'react';
import instance from '../../axios';

const SellerOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            const token = localStorage.getItem('sellerToken'); // Get the token from local storage

            if (!token) {
                setError('No authentication token found.');
                setLoading(false);
                return;
            }

            try {
                const response = await instance.get('/api/v1/orders/seller/orders', {
                    withCredentials: true,
                });
                setOrders(response.data.orders);
            } catch (error) {
                console.error('Error fetching seller orders:', error);
                setError('Failed to fetch orders. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'text-yellow-500';
            case 'Paid':
                return 'text-green-500';
            case 'Canceled':
                return 'text-red-500';
            case 'Delivered':
                return 'text-blue-500';
            default:
                return '';
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-8">Your Sales</h1>
            {orders.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {orders.map((order) => (
                        <div key={order._id} className="border rounded-lg shadow-lg p-4">
                            <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
                            <p>Ordered by: {order.user.firstName} {order.user.lastName}</p>
                            <p>Total Items: {order.orderItems.length}</p>
                            <p className={getStatusColor(order.paymentStatus)}>Payment Status: {order.paymentStatus}</p>
                            
                            <h3 className="font-semibold mt-4">Shipping Address:</h3>
                            <p>{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
                            
                            <div className="mt-4">
                                {order.orderItems.map((item) => (
                                    <div key={item.productId._id} className="flex items-center mb-2">
                                        <img src={item.productId.image} alt={item.productId.title} className="w-20 h-20 object-cover" />
                                        <div className="ml-4">
                                            <h3 className="text-lg">{item.productId.title}</h3>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: ₹{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No orders found for your products.</p>
            )}
        </div>
    );
};

export default SellerOrderList;
