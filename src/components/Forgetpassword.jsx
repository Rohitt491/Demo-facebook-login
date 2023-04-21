import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forgetpassword = () => {
    const nav = useNavigate();
    const [Email, Setemail] = useState('');
    const [Pass, Setpass] = useState('');
    const [Invalidemail, Setinvalideamil] = useState('');
    const [Invalidemailotp, Setinvalideamilotp] = useState('');
    const [Invalidpass, Setinvalidpass] = useState('');


    const loginbtn = () =>{
        if(Email == 'rohitgodara@gmail.com' && Pass == 'amazon' || Email == 'godararinku@gmail.com' && Pass == 'amazon'){
            nav('/main');
         }else if(Email == '' && Pass=='' ){
             Setinvalideamil('enter username first');
             Setinvalidpass('enter password first');
         }else{
             Setinvalideamil('invalid username');
             Setinvalidpass('invalid password');
         }
    }

    const otpbtn =() =>{
       if (Email == 'rohitgodara@gmail.com' || Email == 'godararinku@gmail.com'){
        nav('/otp')
       } else if(Email == ''){
        Setinvalideamilotp('enter email first');
       } 
       else{
        Setinvalideamilotp('Email not found');
       }
    }
  return (

    <div className='findacc'>
        <nav className='navbar'>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <div className='navinput'>
           <div style={{display:'flex', flexDirection:'column'}}>
           <input onChange={(e)=> {Setemail(e.target.value)}} type="text" placeholder='Email or phone'/>
            <span style={{fontSize: '10px',  color: 'red'}}>{Invalidemail}</span>
           </div>
           <div style={{display:'flex', flexDirection:'column'}}>
           <input onChange={(e)=> {Setpass(e.target.value)}} type="text" placeholder='Password'/>
            <span style={{fontSize: '10px',  color: 'red'}}>{Invalidpass}</span>
           </div>
            <button onClick={loginbtn}>Log in</button>
        </div>
        </nav>
        <div className='m'>
            <div className='y padd'>
            <h2>Find Your Account</h2>
            <div className='line'></div>
            <div className='middle'>
                <p>Please enter your email address or mobile number to search for your account.</p>
                <input type="text" placeholder='Email address or mobile number' onChange={(e) => {Setemail(e.target.value)}}/>
                <span style={{fontSize: '10px',  color: 'red'}}>{Invalidemailotp}</span>
            </div>
            <div className='line'></div>
            <div className='footerbtn'>
                <button className='stbtn'>Cancel</button>
                <button className='ndbtn' onClick={otpbtn}>Search</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword