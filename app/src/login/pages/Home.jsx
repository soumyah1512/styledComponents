import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const Home = () => {
    const {logout} = useContext(AuthContext)
  return (
      <>
        <h1>Home</h1>
        <button onClick={logout}>Logout</button>
      </>
    
  )
}

export default Home