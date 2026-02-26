import React, {useState} from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
    const[currentState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon}/>
        </div>
        <div className='login-popup-inputs'>
           {currentState==="Login"?<></>:<input className='email-placeholder' type='text' placeholder='Your name' required />}
            <input className='email-placeholder' type='email' placeholder='Your email' required/>
            <input className='email-placeholder' type='password' placeholder='password' required/>
        </div>
        <button>{currentState==="Sign Up"? "create account" : "Login"}</button>
        <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"
        ?<p>Create a new account?<span onClick={() =>setCurrState("Sign Up")}>Click here</span></p>:
        <p>Already have an account?<span onClick={() => setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup