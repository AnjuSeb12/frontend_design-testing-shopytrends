


import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


import instance from '../../axios';
import ThemeToggle from '../User/ThemeToggle';
import { useSelector } from 'react-redux';



const SellerNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);


  useEffect(() => {
   
    const sellerToken = localStorage.getItem('sellerToken');
    console.log("sellertoken",sellerToken)
    if (sellerToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  

  }, []);

  // const handleLogout = async () => {
  //   try {
      
  
  //     const response = await instance.post('/api/v1/seller/logout', {},
  //        { withCredentials: true });

  //     if (response.data.success) {
      
  //       localStorage.removeItem('sellerToken');
  //       // localStorage.removeItem('seller');
      
        
        
  //       setIsAuthenticated(false);
        
  //       navigate('/seller/signup');
  //     } else {
  //       console.error('Logout failed:', response.data.message);
  //     }
   
  //   } catch (error) {
  //     console.error('Logout request failed:', error);
  //   }
  // };



  const handleLogout = async () => {
    try {
      // Remove token and navigate immediately
      localStorage.removeItem('sellerToken');
      setIsAuthenticated(false);
      navigate('/seller/signup');
  
      // Now send the logout request
      const response = await instance.post('/api/v1/seller/logout', {}, { withCredentials: true });
  
      if (!response.data.success) {
        console.error('Logout failed:', response.data.message);
        // Optionally re-authenticate if needed
      }
    } catch (error) {
      console.error('Logout request failed:', error);
    }
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/seller/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Shopytrends</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add navigation links as needed */}
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/seller/productsadd">Start Selling</Nav.Link>
            <Nav.Link as={Link} to="/seller/productsview">Products View</Nav.Link>
            <Nav.Link as={Link} to="/seller/sellerorder">User Order</Nav.Link>
            <Nav.Link as={Link} to="/seller/sellerupdate">My Profile</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
          {/* <div className="theme-toggle-container">
         
            <ThemeToggle className="ml-6 sm:mb-5" />
            </div> */}
            <div className="theme-toggle-container mb-lg-0 mb-3">
              <ThemeToggle className="ml-6" />
            </div>
            {isAuthenticated ? (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            ) : (
              <Nav.Link as={Link} to="/seller/signup">
                <Button variant="outline-light">Login</Button>
              </Nav.Link>
            )}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SellerNavbar;

