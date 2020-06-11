import React, { useCallback, useContext } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import "../App.css";
import { withRouter, Redirect } from 'react-router';
import app from '../base.js';
import { AuthContext } from '../Auth.js';


const Login = ({ history }) => {
    
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email,password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            <SearchBar />
            <Nav />
            <form onSubmit={handleLogin} className="signUpForm">
                <p className="usernameLabel">email</p>
                <input name='email' id='username' type="email"></input>
                <p>password</p>
                <input name='password' id='password' className="passwordInput" type="password"></input>
                <button type='submit' id='login'>login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);