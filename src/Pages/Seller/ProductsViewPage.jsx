import React from 'react'
import SellerProductsView from '../../Components/Seller/SellerProductsView'
import { useSelector } from 'react-redux'


const ProductsViewPage = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const backgroundClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';

  return (
    <div className={`${backgroundClass}`}>
        <SellerProductsView/>
    </div>
  )
}

export default ProductsViewPage