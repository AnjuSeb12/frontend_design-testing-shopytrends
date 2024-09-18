import React from 'react'
import DisplayProducts from './DisplayProducts'
import UserDesign from '../Design/UserDesign/UserDesign'
import Footer from './Footer'
import { useSelector } from 'react-redux'




const UserDashboard = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dashboardClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';
  return (
    <div className={`min-h-screen ${dashboardClass}`}>
      <UserDesign/>
      <div className='mt-6'>
      <DisplayProducts/>

      </div>
      <footer className='w-full'>
        <Footer />
      </footer> 

   
        
    </div>
  )
}

export default UserDashboard