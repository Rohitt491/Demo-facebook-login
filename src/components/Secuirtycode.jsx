import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Secuirtycode = () => {

    const nav = useNavigate();
    const [Email, Setemail] = useState('');
    const [Pass, Setpass] = useState('');
    const [Invalidemail, Setinvalideamil] = useState('');
    const [Otp, Setotp] = useState('');
    const [Invalidotp, Setinvalidotp] = useState('');
    const [Invalidpass, Setinvalidpass] = useState('');



    const loginbtn = () => {
        if (Email == 'rohitgodara@gmail.com' && Pass == 'amazon' || Email == 'godararinku@gmail.com' && Pass == 'amazon') {
            nav('/main');
        } else if (Email == '' && Pass == '') {
            Setinvalideamil('enter username first');
            Setinvalidpass('enter password first');
        } else {
            Setinvalideamil('invalid username');
            Setinvalidpass('invalid password');
        }
    }
    const backtologin = () => {
        nav('/');
    }
    const loginpage = () => {
        if (Otp == '0000') {
            nav('/');
        } else if (Otp == '') {
            Setinvalidotp('First enter otp');
        }
        else {
            Setinvalidotp('Incorrect otp');
        }
    }

    return (

        <div className='findacc'>
            <nav className='navbar'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                <div className='navinput'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input onChange={(e) => { Setemail(e.target.value) }} type="text" placeholder='Email or phone' />
                        <span style={{ fontSize: '10px', color: 'red' }}>{Invalidemail}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input onChange={(e) => { Setpass(e.target.value) }} type="text" placeholder='Password' />
                        <span style={{ fontSize: '10px', color: 'red' }}>{Invalidpass}</span>
                    </div>
                    <button onClick={loginbtn}>Log in</button>
                </div>
            </nav>
            <div className='m'>
                <div className='otpbox'>
                    <h2>Enter security code</h2>
                    <div className='line'></div>
                    <p>Please check your emails for a message with your code. Your code is 6 numbers long.
                    </p>
                    <div className='codeinput'>
                      <div className='flexdirection'>
                      <input type="text" placeholder='Enter code' onChange={(e) => { Setotp(e.target.value) }} />
                        <span style={{ fontSize: '10px', color: 'red' }}>{Invalidotp}</span>
                      </div>
                       <div className='indiv'>
                       <p style={{fontSize:'13px'}}>We sent you code to:</p>
                       <p style={{fontSize:'14px'}}> rohitgodara@gmail.com</p>
                       </div>
                    </div>
                    <div className='line'></div>
                <div className='footercode'>
                    <Link to={'/'} style={{fontSize:'13px'}}><p >Login using password</p></Link>
                    <div className='footerbtn'>
                    <button className='stbtn' onClick={backtologin}>Cancel</button>
                    <button className='ndbtn' onClick={loginpage}>Continue</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Secuirtycode