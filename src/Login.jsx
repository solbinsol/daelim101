import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,
    onAuthStateChanged, // 코드 추가
    signInWithEmailAndPassword, // 코드 추가
    signOut } from "firebase/auth";

import './Login.css';
import { Route, Link, BrowserRouter,Routes } from 'react-router-dom';
const Login = () => {
    // let id = document.getElementById('#id');
    // let pw = document.getElementById('#pw');
    // let btn = document.getElementById('#btn');

    
    // btn.addEventListener('click', function() {
    //     if(id.val() == "") {
    //         id.next('label').addClass('warning');
    //         setTimeout(function() {
    //             document.body.label.removeClass('warning');
    //         }, 1500);
    //     }
    //     else if(pw.val() == "") {
    //         pw.next('label').addClass('warning');
    //         setTimeout(function() {
    //             document.body.label.removeClass('warning');
    //         }, 1500);
    //     }
    // });




    const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth,
        email,
        password
      );
      console.log(userCredential);
      console.log('로그인성공');
      alert("로그인 성공 메인페이지로 이동합니다");
      document.location.href="/main";
    } catch (error) {
      console.log(error);
      alert("로그인실패")
    }
  };

  return (

    <div class="All">
    <section class="login-form">
    <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="int-area">
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="joinid"
            name="joinid"
            />
            <label for="joinid">USER NAME</label>
        </div>
        <div class="int-area">
            <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pw"
            name="pw"
            />
            <label for="pw">PASSWORD</label>
        </div>
        <div class="btn-area">
        <button type="submit" id="btn">로그인</button>
        </div>  
      </form>
      <div class="caption">
            <Link to="/">비번 까먹음?</Link>
            <Link to="/signup">회원가입</Link>
        </div>
      </section>
    </div>


  );
};

export default Login;