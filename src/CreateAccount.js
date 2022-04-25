/* eslint-disable no-unused-vars */
import './CreateAccount.css'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import './CreateAccount.css'
import firebase from "firebase/compat/app";
import database from "firebase/compat/app";
import { getDatabase, ref, set, update } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { createCustomToken } from "firebase/auth";
import { firebaseApp } from "./firebase";

var userid;
var id1;
var fnl;
  
function CreateAccount() {

    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstLastName, setfirstLastName] = useState('');
    const [Username, setUsername] = useState('');

    const database = getDatabase();   
  
    const Register = e => {
      e.preventDefault();

      const { v4: uuidv4 } = require('uuid');
      const uid = uuidv4();

      var str="csu.fullerton.edu";
      var arr = email.split("@");

      userid = "users/" + uid + " + " + Username;
      
      id1 = uid+"+"+Username;

      fnl = firstLastName;

      console.log(userid)
      
      if(str === arr[1]){
          const saveToFirebase = firebaseApp.firestore();

          saveToFirebase.collection("profile_db").doc(id1).set({
          id:Date(),
          Profile: {
              ID: "",
              BIO: "",
              YEAR: "",
              GENDER: "",
              INFO: "",
          }
          });

          set(ref( database, 'users/' + uid + " + " + Username),{
            firstandLastName : firstLastName,
            username : Username
          })
          auth
              .createUserWithEmailAndPassword(email, password)
              .then(auth => {
                if(auth){
                  nav('/')
                }              
              })
              .catch(error => alert(error.message))
      }
      else{
        console.log("THIS IS MY ERROR")
      }   
      
    }
  
  return (
    <div className='createaccount'>
      <div className='createaccount_container'>
        <h1>Please enter a CSUF email and Password </h1>

        <form>
            <h5>Email</h5>
            <input type='text' value = {email} onChange = {e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' placeholder='Password' value = {password} onChange = {e => setPassword(e.target.value)}/>
            <br/>
            <h5>First and Last Name</h5>
            <input type='text' value = {firstLastName} onChange = {e => setfirstLastName(e.target.value)}/>
            <br/>
            <h5>Username</h5>
            <input type='text' value = {Username} onChange = {e => setUsername(e.target.value)}/>
            <br/>
            {/* links "create" button to login page */}
            <button type='submit' onClick={Register}>  Create</button>

            <br/>
        </form>
      </div>
    </div>
    
  )
}

export {userid, id1, fnl}
export default CreateAccount
