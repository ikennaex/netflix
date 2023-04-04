// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDmncbfeJaeZOVJDyEHoDqOmBi6hmxikj0",
    authDomain: "netflix-clone-1e392.firebaseapp.com",
    projectId: "netflix-clone-1e392",
    storageBucket: "netflix-clone-1e392.appspot.com",
    messagingSenderId: "650630252277",
    appId: "1:650630252277:web:682fca1bc76ecc05c527bc",
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()


export {auth}
export default db;