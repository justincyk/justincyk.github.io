import React from 'react'
import { Link } from "react-router-dom";


function CreateAccount() {
  return (
    <div className="CreateAccount">
        <form>
            <h5>Username</h5>
            <input type = "text"/>
            <h5>Password</h5>
            <input type='text'/>
            <br/>

            {/* links "create" button to login page */}
            <Link to ="/login">
                <button>Create</button>
            </Link>

            <br/>
        </form>
    </div>
  )
}

export default CreateAccount
