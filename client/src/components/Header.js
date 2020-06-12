import React, { Component } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

class Header extends Component {
    render() {
        return (
            <nav className="head">
                <div className="headTitle">
                    <Link to="/"><img className="logo" src={Logo} alt=''/></Link>
                </div>
            </nav>
        )
    }
};
 export default Header;
