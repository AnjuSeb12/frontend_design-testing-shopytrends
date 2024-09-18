import React from 'react';
import SellerDashboardCaurosel from './SellerDashboardCaurosel';
import SellerDesign from '../Design/UserDesign/SellerDesign';
import { useSelector } from 'react-redux';







const SellerDashboard = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const dashboardClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';

  return (
   
    <div className={`p-4 bg-slate-400 ${dashboardClass}`}>
    <h1 className="text-2xl font-bold mb-4 text-center"> Welcome Seller</h1>
    <SellerDesign/>
   
  </div>
  )
}

export default SellerDashboard