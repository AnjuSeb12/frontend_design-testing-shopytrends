import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";

const SellerRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await instance.get("/api/v1/seller/check-user", {
          withCredentials: true,
        });

        const data = res.data;
        console.log(data);

        if (data.success === false) {
          navigate("/seller/login", { replace: true }); 
        } else {
          setIsAuthenticated(true); // User is authenticated
        }
      } catch (error) {
        console.error("Error occurred while checking user:", error);
        navigate("/seller/login", { replace: true }); // Redirect to login on error
      } finally {
        setLoading(false); // Stop loading after the check
      }
    };
    checkUser();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while checking
  }

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default SellerRoutes;
