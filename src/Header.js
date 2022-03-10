import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
        <Link to="/login">
            <button> to login</button>
        </Link>
    </div>

  )
}

export default Header