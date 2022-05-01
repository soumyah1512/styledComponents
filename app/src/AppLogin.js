import React, { useContext } from 'react'
import { AuthContext } from './login/contexts/AuthProvider'
import Home from './login/pages/Home'
import Login from './login/pages/Login'

const AppLogin = () => {
    const {isLoggedIn} = useContext(AuthContext)
  return (
   <div>
       {
           isLoggedIn ? <Home/> : <Login />
       }
   </div>
  )
}

export default AppLogin