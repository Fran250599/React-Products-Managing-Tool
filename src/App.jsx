import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Login from './pages/login'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import AddProducts from './pages/AddProducts'
import ShowProducts from './pages/ShowProducts'
import EditProducts from './pages/EditProducts'
import BuyProducts from './pages/BuyProducts'



// Create a router and pass routes to it, in this case, React components
const router = createBrowserRouter([
  { path: '/', element: <Login/> },
  {path : '/home', element: <HomePage/>},
  { path: '/signup', element: <SignUp/> },
  {path: '/addProducts', element: <AddProducts/>},
  {path: '/showProducts', element: <ShowProducts/>},
  {path: '/editProducts', element: <EditProducts/>},
  {path: '/buyProducts', element: <BuyProducts/>}
])



function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
