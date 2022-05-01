import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const LoginForm = () => {
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    
    const {login,post,token} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        post(email, password)
    }
    useEffect(() => {
        if(token){
            login()
        }
    })
  return (
    <div>LoginForm
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="text" name="username" value={email}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" value={password}></input>
                </div>
                <div>
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm