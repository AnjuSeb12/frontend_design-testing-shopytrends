// import React, { useState } from 'react';
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './Navbar.css';




// import instance from '../../axios';
// import { useSelector } from 'react-redux';
// import ThemeToggle from '../User/ThemeToggle';





// const AdminNavbar = () => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

 
//   const handleLogout = async () => {
//     try {
    
//       const response = await instance.post('/api/v1/seller/logout', {}, { withCredentials: true });

//       if (response.data.success) {
      
//         localStorage.removeItem('sellerToken');
//         localStorage.removeItem('seller');
       
//         Cookies.remove('token');
        
//         setIsAuthenticated(false);
        
//         navigate('/');
//       } else {
//         console.error('Logout failed:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Logout request failed:', error);
//     }
//   };



//   return (
//     <Navbar expand="lg" className="bg-dark navbar-dark">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Shopytrends</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/admin/userview" className="text-white">User</Nav.Link>
//             <Nav.Link as={Link} to="/admin/sellerview" className="text-white">Seller</Nav.Link>
//             <Nav.Link as={Link} to="/admin/selleritemview" className="text-white">Seller Product</Nav.Link>
//             <Nav.Link as={Link} to="/admin/orderview" className="text-white">User Order View</Nav.Link>
//             <ThemeToggle className="ml-6 mb-5 mt-7" />
//             <Button
//               onClick={handleLogout}
//               className="ml-3 text-white bg-green-600 hover:bg-green-700 font-semibold py-2 px-4 rounded"
//             >
//               Logout
//             </Button>
           
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AdminNavbar;
import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Navbar.css';
import instance from '../../axios';
import { useSelector } from 'react-redux';
import ThemeToggle from '../User/ThemeToggle';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleLogout = async () => {
    try {
      const response = await instance.post('/api/v1/seller/logout', {}, { withCredentials: true });

      if (response.data.success) {
        localStorage.removeItem('sellerToken');
        localStorage.removeItem('seller');
        Cookies.remove('token');
        setIsAuthenticated(false);
        navigate('/');
      } else {
        console.error('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Logout request failed:', error);
    }
  };

  return (
    <Navbar expand="lg" className={`navbar ${isDarkMode ? 'bg-dark' : 'bg-light'} navbar-${isDarkMode ? 'dark' : 'light'}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">Shopytrends</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/admin/userview" className={`text-${isDarkMode ? 'white' : 'dark'}`}>User</Nav.Link>
            <Nav.Link as={Link} to="/admin/sellerview" className={`text-${isDarkMode ? 'white' : 'dark'}`}>Seller</Nav.Link>
            <Nav.Link as={Link} to="/admin/selleritemview" className={`text-${isDarkMode ? 'white' : 'dark'}`}>Seller Product</Nav.Link>
            <Nav.Link as={Link} to="/admin/orderview" className={`text-${isDarkMode ? 'white' : 'dark'}`}>User Order View</Nav.Link>
            <div className="d-flex align-items-center ml-3">
              <ThemeToggle />
              <Button
                onClick={handleLogout}
                className={`ml-2 ${isDarkMode ? 'btn-light' : 'btn-dark'} font-semibold py-2 px-4 rounded`}
              >
                Logout
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
