import React from 'react'
import { useStateValue } from './StateProvider'
import { useNavigate } from "react-router-dom"
import {firebaseApp} from ".//firebase.js"
import './Profile.css'

function Profile(){
    return(
        <div classname='student-profile'>
                <h1> Profile </h1>

                <div classname="card">
        
                    <div classname="card-header">
                        {/*<img classname="profile_img" src="Patches santa.jpg" alt="student dp"> </img>*/}

                        <profile_img>
                            <img class="profile_img" src= "https://pyxis.nymag.com/v1/imgs/54c/950/eff84c687e50d533f210c2582ffd570142-31-cat-food.2x.rsocial.w600.jpg" />
                        </profile_img>
                        
                        <h3>Patches The Cat</h3>
                    
                    </div>
        
                    <div classname="card-body">
                        {/*<!--Maybe can change line under here to fill in CWID of current logged in user-->*/}
                        <p classname="mb-0"><strong classname="pr-1">Student ID:</strong>889278537</p>
        
                    </div>

                </div>
            {/*End of container*/}

            <div classname="col">
                <div classname="card">
                    <div classname="table">
        
                        <h3>General Information</h3>

                        <h3> Academic Year: 2022</h3>

                        <h3>Gender: Male</h3>
            
                        <h3>Species: Black and white?</h3>
                            
                    </div>

                </div>
                {/*End card shadow-sm*/}
        
                <div classname="Extra_section">
                    <h3>Other Information:</h3>

                    <div classname="other_info">
                        <p>Is a Cat</p>
                    </div>
                </div>
                
            </div>
            {/*End card col-lg-8*/}
      </div>

);
}

  export default Profile