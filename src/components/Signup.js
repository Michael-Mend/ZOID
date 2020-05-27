import React from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "../App.css";

function Signup() {
    return (
        <div>
            <SearchBar />
            <Nav />
            <div className="signUpForm">
                <p className="usernameLabel">username</p>
                <input type="text"></input>
                <p>email</p>
                <input type="text"></input>
                <p>password</p>
                <input className="passwordInput" type="text"></input>
                <Link to='/'>sign up</Link>
            </div>
        </div>
    )
}

export default Signup;