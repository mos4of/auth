import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components/Login';
import flixua from '../image/FLIXUA.png'
import './LoginPage.css'

const LoginPage = () => {
  return (
      <div>
        <img className='img' src={flixua} alt=""></img>
          <Login />
          <p>
              Or <Link to="/register">register</Link>
          </p>
      </div>
  )
}

export default LoginPage
