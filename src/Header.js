import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Upload from './UploadPage'

function Header(){

  const [{user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }

    return(
        <div className="header">

            <Link to='/'><img className="header_logo" src='https://i0.wp.com/www.win-magazine.com/wp-content/uploads/2011/04/CalStateFullerton.gif?fit=600%2C239&ssl=1' /></Link>


            <div className="header_search">
                <input className="header_searchInput" type='text' placeholder="Search item" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                  <div onClick={handleAuthentication} className="header_option">
                    <span className="log_in">{user ? [user.email, <br/>, "Sign Out"] : 'Log In'}</span>
                  </div>
                </Link>

                <Link to='/profile'>
                <div className="header_option">
                    <span className="profile">{user ? "My Profile" : ""}</span>
                </div>
                </Link>

                <div className="header_option">
                    <Link to={'/upload_page'}>
                      <span className="profile">{user ? "Upload an Item" : ""}</span>
                    </Link>
                </div>


                <div className="header_option">
                    <span className="aboutUs"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyautoplay=1" className="href">About Us</a></span>
                </div>


                <div className="header_option">
                    <span className="contactUs">Contact Us</span>
                </div>

            </div>

        </div>
    );
}

export default Header
