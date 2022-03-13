import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">

            <img className="header_logo" src='https://i0.wp.com/www.win-magazine.com/wp-content/uploads/2011/04/CalStateFullerton.gif?fit=600%2C239&ssl=1' />


            <div className="header_search">
                <input className="header_searchInput" type='text' placeholder="Search item" />
            </div>

            <div className="header_nav">
                <Link to='/login'>
                  <div className="header_option">
                    <span className="log_in">Log in</span>
                  </div>
                </Link>

                <div className="header_option">
                    <span className="profle">Profile</span>
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
