import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <div className='login_container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text'/>

                <h5>Password</h5>
                <input type='password'/>
                <br/>
                <button>Sign In</button>
            </form>

            <p> 
                test text
            </p>
        </div>
    </div>

  )
}

export default Login