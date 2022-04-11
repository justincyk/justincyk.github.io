/*eslint no-template-curly-in-string: "error"*/
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';
// import { getDatabase, ref, child, get } from "firebase/database";
import './CreateAccount.js'


function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // get(child(dbRef, 'users')).then((snapshot) => {
  //   if(snapshot.exists()){
  //     id = snapshot.val();
  //     console.log(snapshot.val());
  //   }
  //   else{
  //     console.log("No data");
  //   }
  // }).catch((error) => {
  //     console.error(error);
  // })

  const signIn = e => {
    e.preventDefault();

    var str="csu.fullerton.edu";
    var arr = email.split("@");

    if(str === arr[1]){
      auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
          nav('/')
      })
      .catch(error => alert(error.message))

      console.log("SUCCESSFUL LOGIN VIA EMAIL")
    }
  }
  return (
    <div className='login'>

        <div className='login_container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value = {email} onChange = {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value = {password} onChange = {e => setPassword(e.target.value)}/>
                <br/>
                <button type='submit' onClick={signIn}>Sign In</button>
                <br/>
                {/* links create account button to create account page */}
                <Link to = "/create_account">
                  <button>Create account</button>
                </Link>

            </form>

            <p>
                Click the button below to return to home
            </p>
            <Link to ="/">
              <button> home </button>
            </Link>

        </div>
    </div>

  )
  }



export default Login

//things to do
// - button to create account
// -
