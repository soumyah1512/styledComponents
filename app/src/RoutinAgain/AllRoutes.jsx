import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Users from './Components/Users'
import UserPage from './Components/UserPage'

const AllRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/users/*" element={<Users/>}>
                <Route path=":id" element={<UserPage/>}/> 
            </Route>
        </Routes>
    </>
  )
}

export default AllRoutes