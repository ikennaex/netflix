import React, { useState } from 'react'
import "./Login.css"
import SignupScreen from './SignupScreen';


const Login = () => {
    const [signIn, setSignIn] = useState(false);
  return (
      <div className='login-screen'>
        <div className="login-background">
            <img 
            className='login-logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
            alt='netflix-logo' />

            <button onClick={() => setSignIn(true)} className='login-button' >
                Sign In
            </button>

            <div className="login-gradient">

            </div>

            <div className="login-body">
            {signIn ? (
                <SignupScreen />
            ): (
    
                <>
                <h1>Unlimited films, TV Programmes and more.</h1>
                <h2>Watch anywhere. Cancel at anytime </h2>
                <h3>Ready to watch? Enter your email to create or restart your membership </h3>

                <div className="login-input">
                    <form>
                        <input type= "email" placeholder='Email Address' />
                    <button 
                    onClick={() => setSignIn(true)}
                    className='login-getstarted' >GET STARTED</button>
                    </form>
                </div>
                </>
            )}

            </div>
        </div>
    </div>
  )
}

export default Login