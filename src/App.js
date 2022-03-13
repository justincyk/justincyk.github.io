import React from "react";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// 3/9/22 NOTES:
// - installed react-router-dom, to install: npm install
//   react-router-dom@5.2.0 and then npm install --save react-router-dom
// - added routing to easily navigate throughout website

function App() {
  return (
       // BEM
    <Router>
       <div className="app">
         {/* Makes it so Header renders in each page regardless of location */}
           <Routes>
             {/* Different pages based on the path. '/' is the base */}
             <Route path="/" element={[<Header/>,<Home/>]}/>
             <Route path="/login" element={[<Login/>]}/>
             <Route path="/create_account" element={[<CreateAccount/>]}/>
           </Routes>
       </div>
     </Router>

  );
}

export default App;


// test commit from kenneth
