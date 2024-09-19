import React from 'react'
import AdminNavbar from '../Components/Navbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'




const AdminLayout = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const backgroundClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';
  return (
    <div>
      <nav>
      <AdminNavbar/>
      </nav>
      <div className={`flex-grow min-h-screen ${backgroundClass}`}>
      <Outlet/>

      </div>
    
       
    </div>
  )
}

export default AdminLayout