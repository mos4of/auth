import React from 'react'
import { Login } from '../components/Login';
import flixua from '../image/FLIXUA.png'
import './LoginPage.css'

const LoginPage = () => {
  return (
      <div>
        <img className='img' src={flixua} alt=""></img>
          <Login />

      </div>
  )
}

export default LoginPage
