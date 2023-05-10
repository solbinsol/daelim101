import React, { useState,useEffect } from 'react';
import './MyPage.css';
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

import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';


const MyPage = () =>{
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
    const [major, setMajor] = useState('');
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [class_of, setclass_of] = useState('');

    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userName = await getUserName(user.uid);
          const userPhone = await getUserPhone(user.uid);
          const userEmail = await getUserName(user.uid);
          const userMajor = await getUserMajor(user.uid);
          const userClass_of = await getUserClass_of(user.uid);
          setName(userName);
          setPhone(userPhone);
          setMajor(userMajor);
          setclass_of(userClass_of);
          setEmail(userEmail);
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const getUserName = async (uid) => {
      try {
        const firestore = getFirestore();
        const userRef = doc(firestore, 'users', uid);
        const userDoc = await getDoc(userRef);
  
        if (userDoc.exists()) {
          const userData = userDoc.data();
          return userData.name;
          
        } else {
          console.log('User document does not exist');
          return '';
        }
      } catch (error) {
        console.log(error);
        return '';
      }
    };
    const getUserMajor = async (uid) => {
        try {
          const firestore = getFirestore();
          const userRef = doc(firestore, 'users', uid);
          const userDoc = await getDoc(userRef);
    
          if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.major;
            
          } else {
            console.log('User document does not exist');
            return '';
          }
        } catch (error) {
          console.log(error);
          return '';
        }
      };
      const getUserPhone = async (uid) => {
        try {
          const firestore = getFirestore();
          const userRef = doc(firestore, 'users', uid);
          const userDoc = await getDoc(userRef);
    
          if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.phone;
            
          } else {
            console.log('User document does not exist');
            return '';
          }
        } catch (error) {
          console.log(error);
          return '';
        }
      };
      const getUserClass_of = async (uid) => {
        try {
          const firestore = getFirestore();
          const userRef = doc(firestore, 'users', uid);
          const userDoc = await getDoc(userRef);
    
          if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.class_of;
            
          } else {
            console.log('User document does not exist');
            return '';
          }
        } catch (error) {
          console.log(error);
          return '';
        }
      };

      const getUserEmail = async (uid) => {
        try {
          const firestore = getFirestore();
          const userRef = doc(firestore, 'users', uid);
          const userDoc = await getDoc(userRef);
    
          if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.email;
            
          } else {
            console.log('User document does not exist');
            return '';
          }
        } catch (error) {
          console.log(error);
          return '';
        }
      };
    //   const getUserAge = async (uid) => {
    //     try {
    //       const firestore = getFirestore();
    //       const userRef = doc(firestore, 'users', uid);
    //       const userDoc = await getDoc(userRef);
    
    //       if (userDoc.exists()) {
    //         const userData = userDoc.data();
    //         return userData.age;
            
    //       } else {
    //         console.log('User document does not exist');
    //         return '';
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       return '';
    //     }
    //   };

    return(
        <section class="about">
            <div class="card">
            <div class="profile">
                <img src="../images/mypageimg/mimoticon.jpeg"/>
            </div>
            <div class="info">
                <div class="name">
                <p><span>{name}</span></p>
                <p><span>{major}</span>&nbsp;<span>{class_of}</span></p>
                </div>
                <div class="contacts" >
                <p>🎂1995.09.21</p>
                <p>📞+(82){phone}</p>
                <p>📧{email}</p>
                </div>
                <div class="ranking">
                <p >내 랭킹</p>
                </div>
                <div class="ranking">
                <p >N 위</p>
                </div>
            </div>
            <div class="daelim" > 
                <img src="../images/mypageimg/symbol3.png"/>
            </div>
            </div>
        </section>
    )
}

export default MyPage