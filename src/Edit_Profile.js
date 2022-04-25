import React from 'react'
import { useNavigate } from "react-router-dom"
import {userid, id1, fnl} from './CreateAccount'
import {firebaseApp} from './firebase.js'

function Edit_Profile() {
    const nav = useNavigate();

    const submit = e => {
        e.preventDefault();

        console.log("THE IMPORTED ID IS: ")
        console.log(userid)

        const saveToFirebase = firebaseApp.firestore();
        saveToFirebase.collection("profile_db").doc(id1).update({
        Profile: {
            NAME: fnl,
            ID: e.target.student_id.value,
            BIO: e.target.student_bio.value,
            YEAR: e.target.student_year.value,
            GENDER: e.target.student_gender.value,
            INFO: e.target.student_info.value,
        }
        });

        nav('/profile_page')
    }

  return (
    <div className="edit_profile">
        <form onSubmit={submit}>
            <fieldset>
                <p>Set ID:</p>
                <input type='text' name = "student_id" id=""/>
                <p>Set Bio:</p>
                <input type='text' name = "student_bio" id=""/>
                <p>Set Year:</p>
                <input type='text' name = "student_year" id=""/>
                <p>Set Gender:</p>
                <input type='text' name = "student_gender" id=""/>
                <p>Set Info:</p>
                <input type='text' name = "student_info" vid=""/>
            </fieldset>
            <button type="submit">Submit</button>

        </form>
    </div>

  )
}

export default Edit_Profile