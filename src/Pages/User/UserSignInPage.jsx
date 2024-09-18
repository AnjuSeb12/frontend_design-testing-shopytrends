import React from 'react'
import UserSignIn from '../../Components/User/UserSignIn.jsx'
import { useSelector } from 'react-redux';



const UserSignInPage = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dashboardClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';
  return (
    <div className={ `flex h-screen flex-col items-center justify-center gap-y-5 ${dashboardClass}`}>
    <h1 className="cursor-pointer rounded-lg px-4 py-1 text-2xl text-green-700 shadow-lg transition-all duration-300 ease-in  hover:scale-110">
      User Signin page
    </h1>
      <UserSignIn/>
  </div>
  )
}

export default UserSignInPage