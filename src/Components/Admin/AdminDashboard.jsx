// import React from 'react'
// import { useSelector } from 'react-redux'


// const AdminDashboard = () => {
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);
//   const backgroundColor=isDarkMode ? 'bg-gray-900' : 'bg-white';

//   return (
    
//     <div className={`${backgroundColor} text-center `}>AdminDashboard</div>
//   )
// }

// export default AdminDashboard

import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-100' : 'text-green-600';

  return (
    <div className={`${backgroundColor} ${textColor} text-center min-h-screen flex flex-col items-center justify-center animate-fade-in`}>
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-xl">Welcome to Admin Dashboard! 🎉</p>
    </div>
  );
};

export default AdminDashboard;
