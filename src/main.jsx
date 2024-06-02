
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/NavBar/NavBar.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMuMP3jOGVUKk1egrx7mtP1Llwp3UC7xg",
  authDomain: "via-da-fuga-a17a6.firebaseapp.com",
  projectId: "via-da-fuga-a17a6",
  storageBucket: "via-da-fuga-a17a6.appspot.com",
  messagingSenderId: "1073424594110",
  appId: "1:1073424594110:web:f9da5253782f78ca8c9aef"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)