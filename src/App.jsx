import React, { useState } from 'react'
import './App.css';
export default function App() {
  const IMGURL = import.meta.env.BASE_URL;
  const [isLoginView, setIsLoginView] = useState(true);
  const [passwordType, setPasswordType] = useState('password');
  function switchView() {
    setIsLoginView((prev)=>!prev);
  }
  function togglePasswordVisibility() {
    setPasswordType((prev)=>(prev==='password'?'text':'password'));
  }
  return (
    <div className='app'>
      {isLoginView===true&&(
        <div className='login-container'>
          <h2>Sign in with email</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'mail.png'} alt=''/>
            <input type='email' placeholder='Enter your email'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'lock.png'} alt=''/>
            <input type={passwordType} placeholder='Enter your password'/>
            <img className='right-icon'src={IMGURL+'eye1.png'}alt=''onClick={()=>togglePasswordVisibility()}/>
          </div>
          <p>
            Dont have an account?<label onClick={() => switchView()}>Sign up</label>
          </p>
          <button>Sign in</button>
        </div>
      )}
      {isLoginView===false&&(
        <div className='login-container'>
          <h2>Register for a new account</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'name.jpg'} alt=''/>
            <input type='text' placeholder='First name'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'name.jpg'} alt=''/>
            <input type='text' placeholder='Last name'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'mail.png'} alt=''/>
            <input type='email' placeholder='Enter your email'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'phone.png'} alt=''/>
            <input type='tel' placeholder='Phone number'/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'lock.png'} alt=''/>
            <input type={passwordType} placeholder='Create a password'/>
            <img className='right-icon'src={IMGURL+'eye.png'}alt=''onClick={()=>togglePasswordVisibility()}/>
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + 'lock.png'} alt=''/>
            <input type={passwordType} placeholder='Confirm your password'/>
            <img className='right-icon'src={IMGURL+'eye.png'}alt=''onClick={()=>togglePasswordVisibility()}/>
          </div>
          <p>Already have an account? <label onClick={() => switchView()}>Sign in</label></p>
          <button>Sign up</button>
        </div>
      )}
    </div>
  )
}