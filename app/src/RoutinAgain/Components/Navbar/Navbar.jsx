import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: 'flex', gap: '50px', justifyContent: 'center'}}> 
        <Link to="/">
            <h4>Home</h4>
        </Link>
        <Link to="/about">
            <h4>About</h4>
        </Link>
        <Link to="/contact">
            <h4>Contact</h4>
        </Link>       
        <Link to="/users">
            <h4>Users</h4>
        </Link> 
    </div>
  )
}

export default Navbar