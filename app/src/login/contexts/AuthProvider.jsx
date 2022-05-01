import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token,setToken] = useState("")

    const login = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        setToken("")
        setIsLoggedIn(false)
    }
    const post = async (email, password) => {
        let res = await fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password,
            })
        })
        let data = await res.json()
        setToken(data.token)
    }

    
    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout, post, token}}>
            {children}
        </AuthContext.Provider>
    )
}