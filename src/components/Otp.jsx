import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Otp = () => {
    const nav = useNavigate();
    const [Email, Setemail] = useState('');
    const [Pass, Setpass] = useState('');
    const [Invalidemail, Setinvalideamil] = useState('');
    const [Invalidpass, Setinvalidpass] = useState('');


    
    const loginbtn = () =>{
        if(Email === 'rohitgodara@gmail.com' && Pass === 'amazon' || Email === 'godararinku@gmail.com' && Pass === 'amazon'){
            nav('/main');
         }else if(Email === '' || Pass==='' ){
             Setinvalideamil('enter username first');
             Setinvalidpass('enter password first');
         }else{
             Setinvalideamil('invalid username');
             Setinvalidpass('invalid password');
         }
    }
    
    const codebtn =() =>{
        nav('/code');
    }

    const notyou =() =>{
        nav('/');
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
          <div className='otpbox'>
          <h2>Reset Password</h2>
          <div className='line'></div>
          <div>
          <div className='width100'>
          <div className='leftin'>
          <p>
           How do you want to receive the code to reset your password?
           </p>
          <div>
          <input className='radio' type="radio" />
         <form>
         <p>
            Send code via email
          </p>
          <p>rohitgodara@gmail.com</p>
         </form>
          </div>
          </div>
         <div className='rightin'>
         <img src="https://scontent.fixc3-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c24.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=AxzMyhS7H0UAX9I5IA6&_nc_ht=scontent.fixc3-1.fna&oh=00_AfDs5EJ02pC2fvR5GN-rl28hBBMPuXSLwmONmpZTEaM3ng&oe=645D5B59" alt="image" />
          <p>rohitgodara@gmail.com</p>
          <span>Facebook user</span>
         </div>
          </div>
          </div>
            <div className='line'></div>
          <div className='footerbtn'>
          <button onClick={notyou} className='stbtn'>Not you?</button>
          <button onClick={codebtn} className='ndbtn'>Continue</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Otp