import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Route, Routes, } from 'react-router-dom'
import Google from '../components/Google'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Login = () => {
    const navigate = useNavigate()
  return (
    <h1>
        <div>Login</div>
        <button onClick={() => navigate("signin")}>Sign-in</button>
        <button onClick={() => navigate("signup")}>Sign-up</button>
        <button onClick={() => navigate("google")}>Login with google</button>
        <div>
            <Outlet/>
        </div>
    </h1>
  )
}

export default Login