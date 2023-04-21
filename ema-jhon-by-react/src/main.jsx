import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/orders/Orders';
import Inventory from './components/inventory/Inventory';
import LogIn from './components/Login/LogIn';
import cartProductsLoader from './Loaders/CartProductsLoader';
import Cheakout from './components/cheakout/Cheakout';
import SignUp from './components/SignUP/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
     {
      path:'/',
      element: <Shop></Shop>
     },
     {
      path:'orders',
      element: <Orders></Orders>,
      loader: cartProductsLoader
     },
     {
      path:'inventory',
      element:<Inventory></Inventory>
     },
     {
      path:'login',
      element: <LogIn></LogIn>
     },
     {
      path: 'cheakout',
      element: <Cheakout></Cheakout>
     },
     {
      path:"signup",
      element: <SignUp></SignUp>
     }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
