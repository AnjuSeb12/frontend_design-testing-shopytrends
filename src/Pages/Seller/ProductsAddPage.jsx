import React from 'react'

import ProductsAdd from '../../Components/Seller/ProductsAdd'
import { useSelector } from 'react-redux';


const ProductsAddPage = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const backgroundClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';
  return (
    <div className={`${backgroundClass}`}>
        <ProductsAdd/>
    </div>
  )
}

export default ProductsAddPage