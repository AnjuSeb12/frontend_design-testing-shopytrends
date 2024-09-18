import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";

const UserRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true); // Handle loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Handle authentication state
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await instance.get("/api/v1/user/check-user", {
          withCredentials: true,
        });

        const data = res.data;
        console.log(data);

        if (data.success === false) {
          navigate("/user/signin", { replace: true }); // Redirect to login if not authenticated
        } else {
          setIsAuthenticated(true); // User is authenticated
        }
      } catch (error) {
        console.error("Error occurred while checking user:", error);
        navigate("/user/signin", { replace: true }); // Redirect to login on error
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

export default UserRoutes;
