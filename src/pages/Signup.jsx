
import React, {useState} from 'react'
import {UserAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()

  const navigate = useNavigate()
 






  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="login">
        <div >
            <form autoComplete='off' onSubmit={handleSubmit} className="form">
                <label htmlFor="username" className='label-input'>Email</label>
                <input
                onChange={(e) => setEmail(e.target.value)} 
                 type="email" autoComplete='off' id='username' className='username' placeholder='username'/>
                <label htmlFor="email" className='label-input'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id='email' className='email' placeholder='password'/>
                <button className='btn-login'>Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Signup