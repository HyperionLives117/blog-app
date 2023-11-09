import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



function Login({ setIsAuth }) {
  let navigate = useNavigate();
  
  const signInWithEmail = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
      navigate("/")
    })
  }
  return <div className='loginPage'>
    <p>Sign in email to continue</p>
    <button className='login-with-google-btn' onClick={signInWithEmail}>Sign in with email</button>
  </div>
}

export default Login