import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="head">
            <h1>Work in Progress</h1>
            <div>
                <Link to="/signup"></Link>
                <Link to="/login"></Link>
            </div>
        </nav>
    )
};
 export default Header;
