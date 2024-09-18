// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { authSellerSuccess } from "../../redux/sellerAuthentication";
// import { useDispatch } from "react-redux";





// const schema = yup
//   .object({
//     email: yup.string().email().required(),
//     password: yup.string().min(6),
//   })
//   .required();




// const SellerSignin = () => {
//     const navigate = useNavigate();
//     const dispatch=useDispatch()

   
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
    
//     try {
//       const res = await axios.post(
//         "http://localhost:4000/api/v1/seller/sellerlogin",
//         data,
//         {
//           withCredentials: true,
//         }
//       );
      
//       if (res.data.success) {
//         if (res.data.isAuthenticated) {
//           dispatch(authSellerSuccess({
//             seller: res.data.seller,
           
//             isAuthenticated: res.data.isAuthenticated
//           }));
//           console.log(res.data.seller.role)
//           const role = res.data.seller.role;
          
//           // Check the role and redirect accordingly
//           if (role === 'admin') {
//             toast.success('Login successful! Redirecting to admin dashboard...');
//             navigate('/admin/admindashboard');
//           } else {
//             toast.success('Login successful! Redirecting to seller dashboard...');
//             navigate('/sellerdashboard');
//           } 
//         }
//       } 
//     } catch (error) {
//       console.log(error);
//       toast.error('An error occurred. Please try again.');
//     }
   
//   };


//   return (
//     <div>
//         <ToastContainer/>
//         <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col gap-y-2 rounded-md border p-6 border-success"
//     >
//       <input
//         {...register("email")}
//         placeholder="email"
//         type="email"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//       />
//       {errors.email && <p>{errors.email.message}</p>}
//       <input
//         {...register("password")}
//         placeholder="password"
//         type="password"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//       />
//       {errors.password && <p>{errors.password.message}</p>}
//       <input type="submit" className="rounded-md bg-green-500 py-1 text-white" />
//       <p>
//         Instructor not created yet{" "}
//         <Link to="/seller/signup" className="text-green-500 underline">
//           Signup
//         </Link>
//       </p>
//     </form>
        
//     </div>
//   )
// }

// // export default SellerSignin

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const schema = yup.object({
//   email: yup.string().email('Invalid email address').required('Email is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// }).required();

// const SellerSignin = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:4000/api/v1/seller/sellerlogin',
//         data,
//         { withCredentials: true }
//       );

//       if (response.data.success) {
//         // Save token and seller data in localStorage or context
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('seller', JSON.stringify(response.data.seller));

//         // Display a longer toast or wait for navigation
//         toast.success('Login successful!', { autoClose: 3000 });

//         const role = response.data.seller.role;
//         console.log("Role:", response.data.seller.role);

//         // Navigate based on role
//         if (role === 'seller') {
//           navigate('/sellerdashboard');
//         } else if (role === 'admin') {
//           navigate('/admin/admindashboard');
//         }

//         // No need to reload the page after navigation
//       } else {
//         toast.error(response.data.message, { autoClose: 2000 });
//       }
//     } catch (error) {
//       toast.error('Login failed. Please try again.', { autoClose: 2000 });
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 rounded-md border p-6 border-success">
//         <input
//           {...register('email')}
//           type='email'
//           placeholder="Email"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.email && <p>{errors.email.message}</p>}
//         <input
//           {...register('password')}
//           type="password"
//           placeholder="Password"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.password && <p>{errors.password.message}</p>}
//         <input type="submit" value="Sign In" className="rounded-md bg-green-500 py-1 text-white" />
//         <p>
//           Not registered yet?{' '}
//           <Link to="/seller/signup" className="text-green-500 underline">
//             Signup
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SellerSignin;


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import instance from '../../axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



// Validation schema for the form
const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

const SellerSignin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Check if a token is already in localStorage
  useEffect(() => {
    const checkToken = () => {
      const sellerToken = localStorage.getItem('sellerToken');
      const seller = JSON.parse(localStorage.getItem('seller'));

      if (sellerToken && seller) {
        const role = seller.role;
        if (role === 'seller') {
          navigate('/sellerdashboard');
        } else if (role === 'admin') {
          navigate('/admin/admindashboard');
        }
      }
    };

    checkToken();
  }, [navigate]);

  // Form handling with react-hook-form and yup
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await instance.post(
        '/api/v1/seller/sellerlogin',
        data,
        { withCredentials: true }
      );

      if (response.data.success) {
        // Save token and seller data in localStorage
        localStorage.setItem('sellerToken', response.data.token);
        localStorage.setItem('seller', JSON.stringify(response.data.seller));

        toast.success('Login successful!', { autoClose: 3000 });

        const role = response.data.seller.role;
        if (role === 'seller') {
          navigate('/sellerdashboard');
        } else if (role === 'admin') {
          navigate('/admin/admindashboard');
        }
        window.location.reload();
        
      } else {
        toast.error(response.data.message, { autoClose: 2000 });
      }
    } catch (error) {
      toast.error('Login failed. Please try again.', { autoClose: 2000 });
    }
  };
  const iconColor = isDarkMode ? 'black' : 'gray';
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 rounded-md border p-6 border-success">
        <input
          {...register('email')}
          type='email'
          placeholder="Email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <div style={{ position: 'relative' }}>
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: iconColor,
            }}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" value="Sign In" className="rounded-md bg-green-500 py-1 text-white" />
        <p>
          Not registered yet?{' '}
          <Link to="/seller/signup" className="text-green-500 underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SellerSignin;



