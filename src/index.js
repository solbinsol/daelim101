import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import Login from './Login';
import MyPage from './MyPage';
import MainPage from './MainPage';
import { Route, Link, BrowserRouter,Routes } from 'react-router-dom';
import firebase from "firebase/compat/app";
import reportWebVitals from './reportWebVitals';
import {getFirestore} from "@firebase/firestore"
//import { getFirestore } from 'firebase/firestore/lite';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCEPjw_TLxCaabk1yYi7XONvnHw0e5P8iI",
  authDomain: "capstonereal-cfcc9.firebaseapp.com",
  projectId: "capstonereal-cfcc9",
  storageBucket: "capstonereal-cfcc9.appspot.com",
  messagingSenderId: "530933563513",
  appId: "1:530933563513:web:8409c3e958aca9aa0e14a8",
  measurementId: "G-V3PJVCMQYB"
};
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)


// Initialize Firebase


// export const db = getFirestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

