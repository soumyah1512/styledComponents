import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import X from './pages/X'
import { AuthContext } from './context/AuthContext'
import "./RoutApp.css"
import RequiredAuth from './components/RequiredAuth'

export const RoutApp = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="x" element={
            <RequiredAuth>
                <X/>
            </RequiredAuth>
            }/>
        </Routes>
    </div>
  )
}
