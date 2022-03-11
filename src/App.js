import React from "react";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 3/9/22 NOTES:
// - installed react-router-dom, to install: npm install
//   react-router-dom@5.2.0 and then npm install --save react-router-dom
// - added routing to easily navigate throughout website

function App() {
  return (
      <div className="app">
          <Header/>
          <Home />
          {/* <Routes> */}
            {/* Different pages based on the path. '/' is the base */}
            {/* <Route path="/" element={[<Home/>]}/> */}
          {/* </Routes> */}
      </div>


  );
}

export default App;


// test commit from kenneth
