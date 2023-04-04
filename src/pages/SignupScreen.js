import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./SignupScreen.css"

const SignupScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const register = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch (err => {
      alert(err.message)
    });
  }

  const signIn = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch (err => {
      alert(err.message)
    });
  }

  return (
    <div className='signup-screen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type= "email" />
        <input ref={passwordRef} placeholder='Password' type= "password" />
        <button onClick={signIn} type='submit' >Sign In</button>
        <h4>
          <span className='signupscreen-grey'>New to NetFlix? </span>
          <span onClick={register} className='signupscreen-link'>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen