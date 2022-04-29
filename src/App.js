import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Upload from "./UploadPage"
import Other from "./OtherPage"
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";


// 3/9/22 NOTES:
// - installed react-router-dom, to install: npm install
//   react-router-dom@5.2.0 and then npm install --save react-router-dom
// - added routing to easily navigate throughout website
//3/14/22 NOTES:
// - installed: npm i web-vitals --save-dev to fix an error i got upon npm start

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
       // BEM
    <Router>
       <div className="app">
         {/* Makes it so Header renders in each page regardless of location */}
           <Header/>
           <Routes>
             {/* Different pages based on the path. '/' is the base */}
             <Route path="/" element={[<Home/>]}/>
             <Route path="/login" element={[<Login/>]}/>
             <Route path="/create_account" element={[<CreateAccount/>]}/>
             <Route path="/upload_page" element={[<Upload/>]}/>
             <Route path="/other_page" element={[<Other/>]}/>
           </Routes>
       </div>
     </Router>

  );
}

export default App;


// test commit from kenneth
