import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
        <Link to='/'>
        <h1 className='navbar-title'>Publix Movies</h1>
        </Link>
            
            <div className="navbar-buttons">
            <Link to="/signup">
            <button className='navbar-btn-signup'>SignUp</button>
            </Link>
            <Link to="login">
            <button className='navbar-btn-signin'>Login</button>
            </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar