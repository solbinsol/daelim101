import React, { useState } from 'react';
import './SignUp.css';
import { getAuth,createUserWithEmailAndPassword,
    onAuthStateChanged, // 코드 추가
    signInWithEmailAndPassword, // 코드 추가
    signOut, } from "firebase/auth";

import firebase from "firebase/compat/app";

import 'firebase/auth';
import 'firebase/database';

import { getDatabase, ref, set } from "firebase/database";
import { getDoc, doc ,setDoc} from 'firebase/firestore/lite'
import { getFirestore } from 'firebase/firestore/lite'
// const q = query(collection(database, "검색할컬랙션"), where("대상", "조건문", '값'), orderBy('정렬대상', 'desc') )
// getDocs(q).then( (querySnapshot)=>{
//     querySnapshot.forEach((doc) => {
//         let data = doc.data()  //저장된 데이터
//         let id = doc.id  //고유 아이디
//     })
// })


const Signup = () => {
    
    // function writeUserData(userId,name, phone) {
      
      // const firestore = getFirestore();
      // const users = firestore.collection("users");
    //   users.doc(userId).set({name: name ,
    //     phone : phone});
    //   console.log(name + "펀션");
        
    // }

  const [name,setName] = useState('');
  const [phone, setPhone] = useState('');
  const [major, setMajor] = useState('');
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [class_of, setclass_of] = useState('');
  

  


  const handleSubmit = async (e) => {

  
  //   function writeUserData(userId, name, phone) {
  //   const db = getDatabase();
    // set(ref(db, `/users/${userId}`), {
    //   name: name,
    //   phone: phone
    // });
  // }

    e.preventDefault();
    try {
      const auth = getAuth();
      e.preventDefault();
      const userCredential = await 
      createUserWithEmailAndPassword(auth,
        email,
        password
      );

      console.log("회원가입 성공");
      console.log(name);
      console.log(phone);
      console.log(userCredential.user.uid);
      console.log(userCredential);
      const firestore = getFirestore();
      const users = firestore.collection
      const userDocRef = doc(firestore, 'users', userCredential.user.uid);

      await setDoc(userDocRef, {
        name: name,
        phone: phone,
        class_of:class_of,
        major:major
      });

      // alert("회원가입 성공 로그인 창으로 이동합니다");

      
      // writeUserData(userCredential.user.uid, name, phone);
      // document.location.href="/login";
    } catch (error) {
      console.log(error);
      e.preventDefault();
    }
  };


  


  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div id="header">
            <img src="" id="logo"/>
        </div>
        <div id="wrapper">
          <div id="content">
            <div> 
              <h3 className="join_title">              <label htmlFor="SignId">아이디</label></h3>
              <span className="box int_id">
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="SignId"
                  id="SignId"
                />
                </span>
                <span className="error_next_box"></span>

                
              </div>
              <div>
              <h3 className="join_title"><label htmlFor="pswd1">비밀번호</label></h3>
                    <span className="box int_pass">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>

              </div>
              <div>
              <h3 className="join_title"><label htmlFor="name">이름</label></h3>
                    <span className="box int_pass">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
              </div>
              <div>
              <h3 className="join_title"><label htmlFor="phone">전화번호</label></h3>
                    <span className="box int_pass">
                <input
                  type="text"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </span>
              </div>
              <div>
              <h3 className="join_title"><label htmlFor="class_of">학번</label></h3>
                    <span className="box int_pass">
                <input
                  type="text"
                  placeholder="Enter your phone"
                  value={class_of}
                  onChange={(e) => setclass_of(e.target.value)}
                />
              </span>
              </div>
              <div>
                    <h3 class="join_title"><label for="major">전공</label></h3>
                    <span class="box major_code">
                        <select id="major" class="sel" 
                                          onChange={(e) => setMajor(e.target.value)}>
                            <option>전공 선택</option>
                            <option value="AI시스템과">AI시스템과</option>
                            <option value="로봇자동화공학과">로봇자동화공학과</option>
                            <option value="건축과">건축과</option>
                            <option value="기계공학과">기계공학과</option>
                            <option value="미래자동차공학부">미래자동차공학부</option>
                            <option value="방송음향영상학부">방송음향영상학부</option>
                            <option value="산업경영과">산업경영과</option>
                            <option value="소방안전설비과">소방안전설비과</option>
                            <option value="전자·통신과">전자·통신과</option>
                            <option value="스마트팩토리학부">스마트팩토리학부</option>
                            <option value="실내디자인학부">실내디자인학부</option>
                            <option value="의공융합과">의공융합과</option>
                            <option value="전기공학과">전기공학과</option>
                            <option value="컴퓨터정보학부">컴퓨터정보학부</option>
                            <option value="건설환경공학과">건설환경공학과</option>
                            <option value="반도체학과">반도체학과</option>
                            <option value="경영학과">경영학과</option>
                            <option value="도서관미디어정보과">도서관미디어정보과</option>
                            <option value="사무행정학과">사무행정학과</option>
                            <option value="사회복지학과">사회복지학과</option>
                            <option value="유아교육과">유아교육과</option>
                            <option value="항공서비스과">항공서비스과</option>
                            <option value="호텔레저학과">호텔레저학과</option>
                            <option value="아동보육과">아동보육과</option>
                            <option value="스포츠학부">스포츠학부</option>
                            <option value="호텔조리·제과학부">호텔조리·제과학부</option>
                            <option value="보건안전학과">보건안전학과</option>
                            <option value="보건의료공학과">보건의료공학과</option>
                            <option value="보건의료행정과">보건의료행정과</option>
                            <option value="언어치료학과">언어치료학과</option>
                            <option value="해군기술부사관과">해군기술부사관과</option>
                        </select>                            
                    </span>
                    <span class="error_next_box"></span>
                </div>
                <button type="submit">회원가입 </button>
              </div>

            </div>
      </form>

    </div>
  );
};

export default Signup;