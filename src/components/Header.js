import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"

function Header() {
    return (
        <nav className="head">
            <div className="headTitle">
                <Link to="/"><img className="logo" src={Logo}/></Link>
            </div>
            <div className="logSign">
                <Link className="signup" to="/signup">signup</Link>
                <Link className="login" to="/login">login</Link>
            </div>
        </nav>
    )
};
 export default Header;
