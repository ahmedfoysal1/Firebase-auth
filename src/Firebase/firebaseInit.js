//do not use this method

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkGjYSPrhv0Ou1d8sLjBzZOui63zRx6eA",
  authDomain: "simple-firebase-385b2.firebaseapp.com",
  projectId: "simple-firebase-385b2",
  storageBucket: "simple-firebase-385b2.firebasestorage.app",
  messagingSenderId: "579076349590",
  appId: "1:579076349590:web:230eef63bbda2fd287acb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;