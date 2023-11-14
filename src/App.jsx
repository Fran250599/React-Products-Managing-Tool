import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/login'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'


// Create a router and pass routes to it, in this case, React components
const router = createBrowserRouter([
  { path: '/', element: <Login/> },
  {path : '/home', element: <HomePage/>},
  { path: '/signup', element: <SignUp/> },


])



function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
