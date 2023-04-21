import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const nav = useNavigate();
  const backtologin = () => {
      nav('/')
  }
  return (
    <div className='signupmain'>
        <div className='signup'>
        <h2>Sign Up</h2>
        <p>It's quick and easy.</p>
        <hr/>
        <div className='input'>
            <div className='nameinput'>
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Surname'/>
            </div>
            <input type="text" placeholder='Mobile number or email address'/>
            <input type="text" placeholder='New password'/>
        </div>
        <div className='date'>
            <p>Date of birth</p>
            <input type="date" />
            <input type="month" />
            <input type="number" />
        </div>
        <div className='gender'>
            <p>Gender</p>
            <div className='label'>
            <label>female<input type="radio" /></label>
            <label>Male<input type="radio" /></label>
            <label>Custom<input type="radio" /></label>
            </div>
        </div>
        <button onClick={backtologin}>Sign Up</button>
        </div>
    </div>
  )
}

export default Signup