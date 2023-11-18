import { UserProvider } from './contexts/UserContext';
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


import Login from './pages/login'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import AddProducts from './pages/AddProducts'
import ShowProducts from './pages/ShowProducts'
import EditProducts from './pages/EditProducts'
import BuyProducts from './pages/BuyProducts'
import NavBar from './components/NavBar';

// Create a router and pass routes to it, in this case, React components
const router = createBrowserRouter([
  { path: '/', element: <HomePage/> },
  {path : '/login', element: <Login/>},
  { path: '/signup', element: <SignUp/> },
  {path: '/addProducts', element: <AddProducts/>},
  {path: '/showProducts', element: <ShowProducts/>},
  {path: '/editProducts', element: <EditProducts/>},
  {path: '/buyProducts', element: <BuyProducts/>}
])

function App() {
  return (
    <UserProvider>
      <NavBar/>
      <RouterProvider router={router}>      
      
      <Outlet/>
      </RouterProvider>  
    </UserProvider>   
    
  )
}

export default App
