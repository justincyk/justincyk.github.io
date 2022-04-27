import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        nav("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" onClick={signIn} className="loginpage_button">
            Sign In
          </button>
          <br />
          <p>Or</p>
          {/* links create account button to create account page */}
          <Link to="/create_account">
            <button className="loginpage_button">Create Account</button>
          </Link>
        </form>

        {/* <p>
                test text
            </p>
            <Link to ="/">
              <button className='loginpage_button'> Home </button>
            </Link> */}
      </div>
    </div>
  );
}

export default Login;

//things to do
// - button to create account
// -
