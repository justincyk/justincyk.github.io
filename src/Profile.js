import React,{useEffect, useState} from "react";
import './Profile.css'
import { Link } from "react-router-dom";
import P from "./P";
import { firebaseApp } from "./firebase";
import {fnl} from "./CreateAccount"

function Profile(){
    const [prof, setProf] = useState([]);

    // function to retrieve items from firebase database
    const getProf = () => {
      const getFromFirebase = firebaseApp.firestore().collection("profile_db");
      getFromFirebase.onSnapshot((querySnapShot) => {
        const saveFirebaseItems = [];
        querySnapShot.forEach((doc) => {
          saveFirebaseItems.push(doc.data());
      });
      setProf(saveFirebaseItems);
    });
    }

    // function to update homepage every time an item is uploaded
    useEffect(()=>{
        getProf();
    }, [])

    return(
        <div className='student-profile'>
            <div>
                <h1> </h1>
                {prof.map(prof=>(
                    <P 
                    name={fnl}
                    id={prof.Profile.ID} 
                    bio={prof.Profile.BIO}
                    year={prof.Profile.YEAR}
                    gender={prof.Profile.GENDER}
                    info={prof.Profile.INFO}
                    />
                ))}
            </div>
            <Link to = {'/edit_profile'}>
                <button class="btn1 btn-dark">Edit Profile</button> 
            </Link>
      </div>

);
}

  export default Profile