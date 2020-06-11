import React, { Component } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import app from '../base';

class Header extends Component {
    constructor(props) {

        super(props)

        this.state = {
            logSign: 'logSign',
            signout: 'signout',
        }
    }
    
    render() {
        const { logSign, signout } = this.state
        return (
            <nav className="head">
                <div className="headTitle">
                    <Link to="/"><img className="logo" src={Logo} alt=''/></Link>
                </div>
                <div className={logSign}>
                    <Link className="signup" to="/signup">signup</Link>
                    <Link className="login" to="/login">login</Link>
                </div>
                <button className={signout} onClick={() => app.auth().signOut()}>sign out</button>
            </nav>
        )
    }
};
 export default Header;
