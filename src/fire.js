import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCv8eyvcYpwkYgBj31OCnVNpM6Rw5qRGMY",
    authDomain: "hackaton-js14.firebaseapp.com",
    projectId: "hackaton-js14",
    storageBucket: "hackaton-js14.appspot.com",
    messagingSenderId: "401270021991",
    appId: "1:401270021991:web:b1827235b024eef12e59c2"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;