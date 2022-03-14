// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//This is Kenneth's iteration for firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9vmZAOEhKlv75elnQLtRMl-ewPfoNMv0",
  authDomain: "tuffy-s-trading-post.firebaseapp.com",
  projectId: "tuffy-s-trading-post",
  storageBucket: "tuffy-s-trading-post.appspot.com",
  messagingSenderId: "786932770036",
  appId: "1:786932770036:web:10b4714e8e44274bd56aa1",
  measurementId: "G-EVNHLNLVPS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth  = firebase.auth();

export { db, auth };
