import React from "react";
import './Header.css'

function Header(){
    return(
        <div className="header">

            <img className="header_logo" src='https://i0.wp.com/www.win-magazine.com/wp-content/uploads/2011/04/CalStateFullerton.gif?fit=600%2C239&ssl=1' />


            <div className="header_search">
                <input className="header_searchInput" type='text' placeholder="Search item" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="signUp">Sign Up</span>
                </div>
                <div className="header_option">
                    <span className="logIn">Log In</span>
                </div>
                <div className="header_option">
                    <span className="aboutUs">About Us</span>
                </div>
                <div className="header_option">
                    <span className="contactUs">Contact Us</span>
                </div>

            </div>

        </div>
    );
}

export default Header
