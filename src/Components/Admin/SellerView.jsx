// import React, { useEffect, useState } from 'react';
// import instance from '../../axios';
// import { useSelector } from 'react-redux';



// const SellerView = () => {
//   const [sellers, setSellers] = useState([]);
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

//   useEffect(() => {
//     const getAllSellers = async () => {
//       try {
//         const res = await instance.get("/api/v1/seller/sellers", {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         setSellers(res.data.sellers);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getAllSellers();
//   }, []);
//   const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
//   const borderColor = useColorModeValue('gray.300', 'gray.600');


//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Sellers List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {sellers && sellers.map((seller, index) => (
//           <div
//             key={index}
//             className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
//           >
//             <h2 className="text-lg font-semibold text-gray-800">#{index + 1}</h2>
//             <p className="text-sm text-gray-600"><strong>First Name:</strong> {seller.firstName}</p>
//             <p className="text-sm text-gray-600"><strong>Last Name:</strong> {seller.lastName}</p>
//             <p className="text-sm text-gray-600"><strong>Email:</strong> {seller.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SellerView;
import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const SellerView = () => {
  const [sellers, setSellers] = useState([]);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const getAllSellers = async () => {
      try {
        const res = await instance.get("/api/v1/seller/sellers", {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setSellers(res.data.sellers);
      } catch (error) {
        console.log(error);
      }
    };
    getAllSellers();
  }, []);

  // Conditional styling based on isDarkMode
  const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-white';

  return (
    <div className={`container mx-auto p-4 ${backgroundColor}`}>
      <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>
        Sellers List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sellers && sellers.map((seller, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-md ${backgroundColor} ${borderColor}`}
          >
            <h2 className={`text-lg font-semibold ${textColor}`}>#{index + 1}</h2>
            <p className={`text-sm ${textColor}`}><strong>First Name:</strong> {seller.firstName}</p>
            <p className={`text-sm ${textColor}`}><strong>Last Name:</strong> {seller.lastName}</p>
            <p className={`text-sm ${textColor}`}><strong>Email:</strong> {seller.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerView;


