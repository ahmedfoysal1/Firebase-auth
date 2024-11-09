// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0wvMblMkKIo1Oth3YaGZwbIfxoXsuJms",
  authDomain: "fir-simple-a922e.firebaseapp.com",
  projectId: "fir-simple-a922e",
  storageBucket: "fir-simple-a922e.firebasestorage.app",
  messagingSenderId: "105542468054",
  appId: "1:105542468054:web:b9fb2c52ab8b9c1d2ae477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth