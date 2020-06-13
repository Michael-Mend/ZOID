import React, { useCallback, useContext } from "react";
import "../App.css";
import { withRouter, Redirect } from 'react-router';
import app from '../base.js';
import { AuthContext } from '../Auth.js';
import { Link } from "react-router-dom";

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
            <form onSubmit={handleLogin} className="signUpForm">
                <p className="usernameLabel">email</p>
                <input name='email' id='username' type="email"></input>
                <p>password</p>
                <input name='password' id='password' className="passwordInput" type="password"></input>
                <button type='submit' className='login'>login</button>
                <div className='l1'>
                    <h4>dont have an account?</h4>
                    <Link to='/signup'>signup</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login);