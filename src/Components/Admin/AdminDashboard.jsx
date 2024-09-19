import React from 'react'
import { useSelector } from 'react-redux'


const AdminDashboard = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const backgroundColor=isDarkMode ? 'bg-gray-700' : 'bg-white';

  return (
    
    <div className={`${backgroundColor}`}>AdminDashboard</div>
  )
}

export default AdminDashboard