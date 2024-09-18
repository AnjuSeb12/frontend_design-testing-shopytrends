// import React from 'react'
// import HomeNavbar from '../Components/Navbar/HomeNavbar'
// import { Outlet } from 'react-router-dom'
// import Footer from '../Components/User/Footer'
// import { useSelector } from 'react-redux'






// const HomeLayout = () => {
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);


//   const cardClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
//   return (
//     <>
//       <nav>
//         <HomeNavbar />
//       </nav>
//       <div className="flex-grow">
//         <Outlet />
//       </div>

      

//     </>
//   )
// }

// export default HomeLayout

import React from 'react'
import HomeNavbar from '../Components/Navbar/HomeNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/User/Footer'
import { useSelector } from 'react-redux'

const HomeLayout = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const backgroundClass = isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800';

  return (
    <>
      <nav >
        <HomeNavbar />
      </nav>
      <div className={`flex-grow min-h-screen pt-8 mt-4 ${backgroundClass}`}>
        <Outlet />
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}

export default HomeLayout;
