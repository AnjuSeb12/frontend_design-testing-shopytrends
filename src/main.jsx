import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from './Layouts/HomeLayout.jsx';
import AdminLayout from './Layouts/AdminLayout.jsx';
import SellerLayout from './Layouts/SellerLayout.jsx';
import UserSignupPage from './Pages/User/UserSignupPage.jsx';
import UserSignInPage from './Pages/User/UserSignInPage.jsx';
import SellerSignupPage from './Pages/Seller/SellerSignupPage.jsx';
import SellerSigninPage from './Pages/Seller/SellerSigninPage.jsx';
import UserDashboard from './Components/User/UserDashboard.jsx';
import SellerDashboard from './Components/Seller/SellerDashboard.jsx';
import ProductsAddPage from './Pages/Seller/ProductsAddPage.jsx';
import DisplayProducts from './Components/User/DisplayProducts.jsx';
import { ChakraProvider, extendTheme, useBreakpointValue } from '@chakra-ui/react';
import ProductsViewPage from './Pages/Seller/ProductsViewPage.jsx';
import AdminDashboard from './Components/Admin/AdminDashboard.jsx';
import UsersView from './Components/Admin/UsersView.jsx';
import SellerView from './Components/Admin/SellerView.jsx';
import SellerItemView from './Components/Admin/SellerItemView.jsx';

import { Provider } from 'react-redux';
import CartAdding from './Components/User/CartAdding.jsx';
import AddCart from './Components/User/AddCart.jsx';

import SearchResult from './Components/User/SearchResult.jsx';
import ProductDetail from './Components/User/ProductDetail.jsx';
import OrderForm from './Components/User/OrderForm.jsx';
import OrderSuccess from './Components/User/OrderSuccess.jsx';
import OrderCartForm from './Components/User/OrderCartForm.jsx';
import OrderView from './Components/User/OrderView.jsx';
import AdminOrdersView from './Components/Admin/AdminOrdersView.jsx';




import './index.css'
import UserDesign from './Components/Design/UserDesign/UserDesign.jsx';
import UserRoutes from './Components/ProtectedRoutes/UserRoutes.jsx';
import store from './redux/store.jsx';
import SellerRoutes from './Components/ProtectedRoutes/SellerRoutes.jsx';
import MyProfileUpdate from './Components/User/MyProfileUpdate.jsx';
import MyProfileUpdateSeller from './Components/Seller/MyProfileUpdateSeller.jsx';
import SellerOrderList from './Components/Seller/SellerOrderList.jsx';








// const savedTheme = localStorage.getItem('theme') || 'light';
// document.documentElement.setAttribute('data-theme', savedTheme);

// // Chakra UI theme setup
// const chakraTheme = extendTheme({
//   config: {
//     initialColorMode: savedTheme, // set the initial color mode based on saved theme
//     useSystemColorMode: false,
//   },
// });




const router = createBrowserRouter([
  {

    element: 
       <HomeLayout />
   ,
    children:
      [
        {
          path:"/userdesign",
          element:<UserDesign/>

        },

        {
          path: "/",
          element: <UserDashboard />
        },
        {
          path: "/user/signup",
          element: <UserSignupPage />,
        },
        {
          path: "/user/signin",
          element: <UserSignInPage />
        },
        // {
        //   path: "/user/cart",
        //   element:<CartAdding />

        // },
        {
          path: '/user/cart',
          element: (
            <UserRoutes>
              <CartAdding />
            </UserRoutes>
          ),
        },
        // {
         
        //   path: "/user/addcart",
        //   element:<AddCart />

        // },
        {
          path: '/user/addcart',
          element: (
            <UserRoutes>
              <AddCart />
            </UserRoutes>
          ),
        },
        {
          path: "/search",
          element: <SearchResult />
        },
        {
          path: "/product/:id",
          element: <ProductDetail />
        },
        // {
        //   path: "/order-form",
        //   element:<OrderForm />

          
         
        // },
        {
          path: '/order-form',
          element: (
            <UserRoutes>
              <OrderForm />
            </UserRoutes>
          ),
        },

        {
          path: "/order-success",
          element: <OrderSuccess />
        },
        {
          path: "/order-cart-form",
          element:<OrderCartForm />

            
      
          
          
        },
        {
          path: "/user/orders",
          element: <OrderView />
        },
        {
          path:"/user/displayproduct",
          element: <DisplayProducts/>
        },
        {
          path:"/user/userupdate",
          element:
          (
            <UserRoutes>
              <MyProfileUpdate/>
            </UserRoutes>
          
          )
        }




      ],
  },
  {
    
    element: <SellerLayout />,
  
   
    
    children: [
      {
        path: "/sellerdashboard",
        element: <SellerDashboard />

      },
      {
        path: "/seller/signup",
        element: <SellerSignupPage />
      },
      {
        path: "/seller/login",
        element: <SellerSigninPage />
      },
      {
        path: "/seller/productsadd",
        element: (
          <SellerRoutes>
            <ProductsAddPage />

          </SellerRoutes>
        )
        
        
      },
      {
        path: "/seller/productsview",
        element: (
          <SellerRoutes>
            <ProductsViewPage />

          </SellerRoutes>
        )
        
    
       
      },
      {
        path:"/seller/sellerupdate",
        element:(
         <SellerRoutes>
            <MyProfileUpdateSeller/>
            </SellerRoutes>
        )
      },
      {
        path:"seller/sellerorder",
        element:(
        <SellerRoutes>
          <SellerOrderList/>
        </SellerRoutes>)
      }
    ]
  },


  {
    element: <AdminLayout />,

    
    children: [
      {
        path: "/admin/admindashboard",
        element: <AdminDashboard />
      },
      {
        path: "/admin/userview",
        element: <UsersView />
      },
      {
        path: "/admin/sellerview",
        element: <SellerView />
      },
      {
        path: "/admin/selleritemview",
        element: <SellerItemView />
      },{
        path:"/admin/orderview",
        element:<AdminOrdersView/>
      }
    ],
  },




]);




ReactDOM.createRoot(document.getElementById('root')).render(
 
    
    <React.StrictMode>
       <Provider store={store}>
       <ChakraProvider>
        <RouterProvider router={router} />

      </ChakraProvider>
       </Provider>
      


    </React.StrictMode>
    



)
