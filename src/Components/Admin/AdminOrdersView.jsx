// import React, { useEffect, useState } from 'react';
// import instance from '../../axios';
// import { useSelector } from 'react-redux';



// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const isDarkMode = useSelector((state) => state.theme.isDarkMode);

   
//     const fetchOrders = async () => {
//         try {
//             const response = await instance.get('/api/v1/orders/allorders');
//             console.log(response.data.orders)
//             setOrders(response.data.orders);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };


//     useEffect(() => {
//         fetchOrders();
//         const intervalId = setInterval(fetchOrders, 30000); 

       
//         return () => clearInterval(intervalId);
//     }, [setOrders]);
//     const borderColor = useColorModeValue('gray.300', 'gray.600');
//     const textColor = useColorModeValue('gray.800', 'gray.200');
//     const backgroundColor = useColorModeValue('white', 'gray.700');

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-semibold text-center mb-8">Your Orders</h1>
//             {orders.length > 0 ? (
//                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border rounded-lg shadow-lg p-4">
//                             <div className="mb-4">
//                                 <h2 className="text-xl font-semibold mb-2">Order ID: {order._id}</h2>
//                                 <p className="text-gray-600">Ordered on: {new Date(order.createdAt).toLocaleDateString()}</p>
//                                 <p className="text-gray-600">Total Items: {order.orderItems.length}</p>
//                                 <p className={`font-bold ${order.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
//                                     Payment Status: {order.paymentStatus}
//                                 </p>
//                                 {order.user && (
//                                     <div className="mt-4">
//                                         <p className="text-gray-600">User: {order.user.firstName} ({order.user.email})</p>
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="space-y-4">
//                                 {order.orderItems.map((item) => (
//                                     <div key={item.productId} className="flex items-center">
//                                         <img
//                                             src={item.productId.image}
//                                             alt={item.productId.title}
//                                             className="w-20 h-20 object-cover rounded-lg"
//                                         />
//                                         <div className="ml-4">
//                                             <h3 className="text-lg font-semibold">{item.productId.title}</h3>
//                                             <p className="text-gray-600">Quantity: {item.quantity}</p>
//                                             <p className="text-gray-600">Price: ₹{item.price}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-500">No orders found.</p>
//             )}
//         </div>
//     );
// };

// export default OrderList;
import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const fetchOrders = async () => {
    try {
      const response = await instance.get('/api/v1/orders/allorders');
      console.log(response.data.orders);
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
    const intervalId = setInterval(fetchOrders, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const containerClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
  const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';
  const secondaryTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-white';

  return (
    <div className={`container mx-auto p-4 ${containerClass}`}>
      <h1 className={`text-3xl font-semibold text-center mb-8 ${textColor}`}>
        Your Orders
      </h1>
      {orders.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className={`border rounded-lg shadow-lg p-4 ${backgroundColor}`}
              style={{ borderColor }}
            >
              <div className="mb-4">
                <h2 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Order ID: {order._id}
                </h2>
                <p className={`text-sm ${secondaryTextColor}`}>
                  Ordered on: {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <p className={`text-sm ${secondaryTextColor}`}>
                  Total Items: {order.orderItems.length}
                </p>
                <p className={`font-bold ${order.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                  Payment Status: {order.paymentStatus}
                </p>
                {order.user && (
                  <div className="mt-4">
                    <p className={`text-sm ${secondaryTextColor}`}>
                      User: {order.user.firstName} ({order.user.email})
                    </p>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {order.orderItems.map((item) => (
                  <div key={item.productId} className="flex items-center">
                    <img
                      src={item.productId.image}
                      alt={item.productId.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <h3 className={`text-lg font-semibold ${textColor}`}>
                        {item.productId.title}
                      </h3>
                      <p className={`text-sm ${secondaryTextColor}`}>
                        Quantity: {item.quantity}
                      </p>
                      <p className={`text-sm ${secondaryTextColor}`}>
                        Price: ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={`text-center text-sm ${secondaryTextColor}`}>
          No orders found.
        </p>
      )}
    </div>
  );
};

export default OrderList;


