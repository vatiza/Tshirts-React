import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import OrdersReview from './Components/OrdersReview/OrdersReview.jsx';
import Grandpa from './Components/Grandapa/Grandpa.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("tshirts.json")
      },
      {
        path: '/review',
        element: <OrdersReview></OrdersReview>
      },
      {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
