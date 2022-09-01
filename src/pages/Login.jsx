import React from 'react'
import './pages.css'

const Login = () => {
  return (
    <div className="login">
            <form autoComplete='off'>
        <div className="form">
                <label htmlFor="username" className='label-input'>Username</label>
                <input type="text" id='username' className='username' placeholder='username'/>
                <label htmlFor="email" className='label-input'>Password</label>
                <input type="email" id='email' className='email' placeholder='email'/>
                <button className='btn-login'>Login</button>
        </div>
            </form>
    </div>
  )
}

export default Login