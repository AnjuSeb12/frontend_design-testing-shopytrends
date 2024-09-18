import React from 'react'
import UserNavbar from '../Components/Navbar/HomeNavbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/User/Footer.jsx'


const UserLayout = () => {
  return (
    <>
      <nav>
        <UserNavbar />
      </nav>
      <div className="flex-grow">
        <Outlet />
      </div>


    </>

  )
}

export default UserLayout