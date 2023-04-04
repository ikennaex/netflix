import React, { useEffect } from 'react';
import HomeScreen from './pages/HomeScreen';
import './App.css';
import { Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './pages/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch =  useDispatch()

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })

    return unSubscribe;
  }, [dispatch])
  return (

    <div className="App">
      {!user ? (
        <Login />
      ) : (
      <Routes>
        <Route path = '/profile' element = {<ProfileScreen/>} />
        <Route exact path='/' element = {<HomeScreen />} />
      </Routes>
        
      )}
    </div>
  );
}

export default App;
