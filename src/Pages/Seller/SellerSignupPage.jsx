import React from 'react'
import SellerSignup from '../../Components/Seller/SellerSignup.jsx'
import { useSelector } from 'react-redux';


const SellerSignupPage = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dashboardClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';
  return (
    <div className={`flex h-screen flex-col items-center justify-center gap-y-5 ${dashboardClass}`}>
      <h1 className="cursor-pointer rounded-lg px-4 py-1 text-2xl text-green-700 shadow-lg transition-all duration-300 ease-in  hover:scale-110">
        Seller Signup page
      </h1>

      <SellerSignup />
    </div>
  )
}

export default SellerSignupPage