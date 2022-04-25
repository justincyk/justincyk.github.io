/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

// Trying Justin's firebase
const firebaseConfig = {
  // apiKey: "AIzaSyAfaQAxiHcHkrz1f1foX5fb3jaNL729BBc",
  // authDomain: "tuffys-trading-post.firebaseapp.com",
  // projectId: "tuffys-trading-post",
  // storageBucket: "tuffys-trading-post.appspot.com",
  // messagingSenderId: "481583233912",
  // appId: "1:481583233912:web:32578c054a8ae83b71268d",
  // measurementId: "G-2SW86JKNL6"
  apiKey: "AIzaSyB9vmZAOEhKlv75elnQLtRMl-ewPfoNMv0",
  authDomain: "tuffy-s-trading-post.firebaseapp.com",
  databaseURL: "https://tuffy-s-trading-post-default-rtdb.firebaseio.com",
  projectId: "tuffy-s-trading-post",
  storageBucket: "tuffy-s-trading-post.appspot.com",
  messagingSenderId: "786932770036",
  appId: "1:786932770036:web:10b4714e8e44274bd56aa1",
  measurementId: "G-EVNHLNLVPS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(firebaseApp);
const auth  = firebase.auth();
const database = firebase.database();
const ref = firebase.firestore().collection("developers")

export { db, auth, firebaseApp };
