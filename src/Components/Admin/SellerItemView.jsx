
// import React, { useEffect, useState } from 'react';
// import { Box, Text, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
// import instance from '../../axios';
// import { useSelector } from 'react-redux';


// const SellerItemView = () => {
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
//   const [products, setProducts] = useState([]);
//   console.log("hitted")

//   useEffect(() => {
//     const getSellerProducts = async () => {
//       try {
//         const res = await instance.get("/api/v1/product/getproducts", {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         console.log("hitted")
//         console.log("Fetched products:", res.data.getProducts);
//         setProducts(res.data.getProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     };
 
//     getSellerProducts();
//   }, []);

//   const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
 

//   return (
//     <Box className="container mx-auto p-4">
//       <Text as="h1" className="text-2xl font-bold mb-4">
//         Seller Products
//       </Text>
//       <Flex wrap="wrap" gap={4}>
//         {products.map((product) => (
//           <Box
//             key={product._id}
//             className="w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg shadow-md"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               boxSize="150px"
//               objectFit="fill"
//               borderRadius="md"
//               mb={4}
//             />
//             <Text className="text-lg font-semibold">{product.title}</Text>
//             <Text className="text-sm text-blue-900 mb-2">{product.description}</Text>
//             <Text className="text-blue-500 font-bold mb-4">Price: ₹{product.price}</Text>
//             <Flex
//               className="text-sm text-blue-900"
//               direction={flexDirection}
//               justify="space-between"
//               align="center"
//             >
//               <Text>Seller: {product.seller.firstName}</Text> 
//                <Text>({product.seller.email})</Text>
//             </Flex>
//           </Box>
//         ))}
//       </Flex>
//     </Box>
//   );
// };

// export default SellerItemView;

import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const SellerItemView = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getSellerProducts = async () => {
      try {
        const res = await instance.get("/api/v1/product/getproducts", {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setProducts(res.data.getProducts);
      } catch (error) {
        console.log(error);
      }
    };

    getSellerProducts();
  }, []);

  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const borderColor = isDarkMode ? 'gray.600' : 'gray.300';
  const textColor = isDarkMode ? 'white' : 'black';
  const descriptionColor = isDarkMode ? 'blue.300' : 'blue.900';
  const priceColor = isDarkMode ? 'blue.300' : 'blue.500';
  const backgroundColor = isDarkMode ? 'gray.800' : 'white';

  return (
    <Box className="container mx-auto p-4" bg={backgroundColor}>
      <Text as="h1" className="text-2xl font-bold mb-4" color={textColor}>
        Seller Products
      </Text>
      <Flex wrap="wrap" gap={4}>
        {products.map((product) => (
          <Box
            key={product._id}
            className="w-full md:w-1/2 lg:w-1/3 p-4 border rounded-lg shadow-md"
            borderColor={borderColor}
          >
            <Image
              src={product.image}
              alt={product.title}
              boxSize="150px"
              objectFit="fill"
              borderRadius="md"
              mb={4}
            />
            <Text className="text-lg font-semibold" color={textColor}>
              {product.title}
            </Text>
            <Text className="text-sm mb-2" color={descriptionColor}>
              {product.description}
            </Text>
            <Text className="font-bold mb-4" color={priceColor}>
              Price: ₹{product.price}
            </Text>
            <Flex
              className="text-sm"
              direction={flexDirection}
              justify="space-between"
              align="center"
            >
              <Text color={textColor}>Seller: {product.seller.firstName}</Text>
              <Text color={textColor}>({product.seller.email})</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default SellerItemView;

