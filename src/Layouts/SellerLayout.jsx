import React from 'react'
import SellerNavbar from '../Components/Navbar/SellerNavbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



const SellerLayout = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const backgroundClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';
  return (
    <div className={` ${backgroundClass}`}>
      <nav>
      <SellerNavbar/>
      </nav>
      <div className={`flex-grow min-h-screen ${backgroundClass}`}>
        <Outlet />
      </div>
       
    </div>
  )
}

export default SellerLayout