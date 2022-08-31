import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <h1 className='navbar-title'>Publix Movies</h1>
            <div className="navbar-buttons">
            <button className='navbar-btn-signup'>Sign Up</button>
            <button className='navbar-btn-signin'>Login</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar