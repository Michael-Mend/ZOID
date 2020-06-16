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
                <p className="usernameLabel">Email</p>
                <input name='email'type="email" id='username'></input>
                <p>Password</p>
                <input name='password' id='password' className="passwordInput" type="password"></input>
                <button type='submit' className='login'>Login</button>
                <div className='l1'>
                    <h4 id="message">Dont have an account?</h4>
                    <Link id="logSign"to='/signup'>Signup!</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login);