import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Loginpage = () => {
const [Email, Setemail] = useState('');
const [Pass, Setpass] = useState('');
const [Invalidemail, Setinvalidemail] = useState('');
const [Invalidpass, Setinvalidpass] = useState('');

  const nav = useNavigate();

  const loginbtn = () =>{
    if(Email == 'rohitgodara@gmail.com' && Pass == 'amazon' || Email == 'godararinku@gmail.com' && Pass == 'amazon'){
       nav('/main');
    }else if(Email == '' && Pass == ''){
      Setinvalidemail('enter username first')
      Setinvalidpass('enter password first') 
  } else{
      Setinvalidemail('invalid username');
      Setinvalidpass('invalid password');
    }
  }

  const newacc = () =>{
    nav('/signup');
  }



  return (
    <div className='loginmain'>
     <div className='loginleftside'>
     <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
      <p>Facebook helps you connect and share with the people in your life.</p>
     </div>
     <div className='loginrightside'>
      <h2>Facebook</h2>
      <input onChange={(e) => {Setemail(e.target.value)}} type="text" placeholder='Enter username'/>
      <span style={{fontSize: '10px',margin: '-10px', textAlign: 'left', color: 'red'}}>{Invalidemail}</span>
      <input onChange={(e) => {Setpass(e.target.value)}} type="password" placeholder='Enter password'/>
      <span style={{fontSize: '10px',margin: '-10px', textAlign: 'left', color: 'red'}}>{Invalidpass}</span>
      <button className='loginbtn' onClick={loginbtn}>Log in</button>
      <Link className='Link' to='/forgetpassword'>Forgotten password?</Link>
      <hr/>
      <button className='createnewacc' onClick={newacc}>Create new account</button>
     </div>

    </div>
  )
}

export default Loginpage;