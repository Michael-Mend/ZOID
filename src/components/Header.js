import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import app from '../base';

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
            <button className='signout' onClick={() => app.auth().signOut()}>sign out</button>
        </nav>
    )
};
 export default Header;
