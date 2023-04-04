import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css"
import ProfileScreen from './pages/ProfileScreen';

const Nav = () => {

  const [show, handleShow] = useState(false);
  const navigate = useNavigate()

  const transitonNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitonNavbar)
    return () => {
      window.removeEventListener('scroll', transitonNavbar)
    }
  }, [])

  return (
    <div className= {`nav ${show && "nav-black"}`} >

      <div className="nav-contents">
      <img 
      onClick={() => navigate("/")}
      className='nav-logo'
      src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
      alt='netflix-logo' 
      />

      <img 
      onClick={() => navigate("/profile")}
      className='nav-avatar'
      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
      alt= 'netflix-avatar'
      />
      </div>
    </div>
  )
}

export default Nav