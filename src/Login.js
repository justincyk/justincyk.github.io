import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
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
                <button>Sign In</button>
                <br/>
                {/* links create account button to create account page */}
                <Link to = "/createaccount">
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