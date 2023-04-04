import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import PlansScreen from '../PlansScreen'
import "./ProfileScreen.css"

const ProfileScreen = () => {
    const user = useSelector(selectUser)
  return (
    <div className='profile-screen'>
        <Nav />
        <div className="profilescreen-body">
            <h1>Edit Profile</h1>
            <div className="profilescreen-info">
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='netflix-avatar'  />

            <div className="profilescreen-details">
                <h2>{user.email}</h2>

                <div className="profilescreen-plans">
                    <h3>Plans</h3>
                    <PlansScreen />

                    <button onClick={() => auth.signOut()} className='profilescreen-signout'>Sign Out</button>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileScreen