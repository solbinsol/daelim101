import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4mNQXEJrdncyNVjYZ5HAlJ8asxmBR_g",
  authDomain: "capstone-d4dec.firebaseapp.com",
  databaseURL: "https://capstone-d4dec-default-rtdb.firebaseio.com",
  projectId: "capstone-d4dec",
  storageBucket: "capstone-d4dec.appspot.com",
  messagingSenderId: "423660757930",
  appId: "1:423660757930:web:f58748bac93a917a0501d3",
  measurementId: "G-4XL767N0SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
