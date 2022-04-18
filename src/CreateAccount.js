/* eslint-disable no-unused-vars */
import './CreateAccount.css'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";


function CreateAccount() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const Register = e => {
      e.preventDefault();

      auth
          .createUserWithEmailAndPassword(email, password)
          .then(auth => {
            if(auth){
              history('/')
            }
          })
          .catch(error => alert(error.message))
    }
    
  return (
    <div className="CreateAccount">
      <div className='CreateAccount_Container'>
      <h1>Create Account</h1>
        <form>
            <h5>Email</h5>
            <input type='text' placeholder='E-mail' value = {email} onChange = {e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' placeholder='Password' value = {password} onChange = {e => setPassword(e.target.value)}/>
            <br/>

            {/* links "create" button to login page */}
            <button type='submit' onClick={Register}>  Create</button>

            <br/>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
