import React from "react";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 3/9/22 NOTES:
// - installed react-router-dom, to install: npm install 
//   react-router-dom@5.2.0 and then npm install --save react-router-dom
// - added routing to easily navigate throughout website

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Tuffy's Trading Post</h1>
        <Switch>
          {/* login route */}
          <Route path="/login">
            <Login/>
          </Route>
          {/* create account route */}
          <Route path="/createaccount">
            <CreateAccount/>
          </Route>
          {/* default route aka homepage */}
          <Route path="/">
            <h1>THIS IS THE HOMEPAGE</h1>
            {/* this header file below is a test file to demonstrate the homepage */}
            <Header /> 
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;


// test commit from kenneth