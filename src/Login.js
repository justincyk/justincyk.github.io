import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            nav('/')
        })
        .catch(error => alert(error.message))
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
                test text
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
