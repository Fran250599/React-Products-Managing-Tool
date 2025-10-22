import { UserProvider } from './contexts/UserContext';
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'
//holaa

import Login from './pages/login'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import AddProducts from './pages/AddProducts'
import ShowProducts from './pages/ShowProducts'
import EditProducts from './pages/EditProducts'
import BuyProducts from './pages/BuyProducts'
import Bill from './pages/Bill'
import NavBar from './components/NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <HomePage />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <NavBar />
        <SignUp />
      </>
    ),
  },
  {
    path: '/addProducts',
    element: (
      <>
        <NavBar />
        <AddProducts />
      </>
    ),
  },
  {
    path: '/showProducts',
    element: (
      <>
        <NavBar />
        <ShowProducts />
      </>
    ),
  },
  {
    path: '/editProducts',
    element: (
      <>
        <NavBar />
        <EditProducts />
      </>
    ),
  },
  {
    path: '/buyProducts',
    element: (
      <>
        <NavBar />
        <BuyProducts />
      </>
    ),
  },
  {
    path: '/bill',
    element: (
      <>
        <NavBar />
        <Bill />
      </>
    ),
  }
]);


function App() {
  return (
    <UserProvider> 

      <RouterProvider router={router}>
        
      </RouterProvider>
    </UserProvider>
  )
}

export default App
