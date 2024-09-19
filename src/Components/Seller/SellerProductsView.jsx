
// import React, { useEffect, useState } from 'react';
// import instance from '../../axios';
// import { useSelector } from 'react-redux';


// const SellerProductsView = () => {
//   const [products, setProducts] = useState([]);
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);


//   useEffect(() => {
//     const getAllSellerProducts = async () => {
//       try {
//         const res = await instance.get(`/api/v1/product/getsingleproduct`, {
//           withCredentials: true,
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setProducts(res.data.product);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     getAllSellerProducts();
//   }, []);
//   const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';
//   const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';


//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {products && products.map((product, index) => (
//         <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-32 h-40 object-cover rounded-md mb-4"
//           />
//           <h2 className="text-lg font-medium text-gray-800 mb-2">{product.title}</h2>
//           <p className="text-gray-600 text-sm mb-2">{product.description}</p>
//           <span className="text-green-600 font-semibold">₹{product.price}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SellerProductsView;
import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const SellerProductsView = () => {
  const [products, setProducts] = useState([]);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const getAllSellerProducts = async () => {
      try {
        const res = await instance.get(`/api/v1/product/getsingleproduct`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setProducts(res.data.product);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAllSellerProducts();
  }, []);

  // Conditional styling based on isDarkMode
  const containerClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const cardBackgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';
  const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';

  return (
    <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${containerClass}`}>
      {products && products.map((product, index) => (
        <div
          key={index}
          className={`rounded-lg shadow-md p-4 flex flex-col items-center ${cardBackgroundColor} ${borderColor} border`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-40 object-cover rounded-md mb-4"
          />
          <h2 className={`text-lg font-medium ${textColor} mb-2`}>{product.title}</h2>
          <p className={`text-sm ${textColor} mb-2`}>{product.description}</p>
          <span className={`text-green-600 font-semibold`}>₹{product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default SellerProductsView;
