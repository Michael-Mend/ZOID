import React, { useCallback } from "react";
import app from '../base';
import "../App.css";
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password, displayName} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then( res => {
                    return res.user.updateProfile({
                        displayName: displayName.value
                    })
                });
            const user = {
                username: displayName.value
            }
            axios.post('/api/user/', user)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            history.push('/');
        } catch (error) {
            alert(error)
        }
        
    }, [history]);

    return (
        <div>
            <form onSubmit={handleSignUp} className="signUpForm">
                <p className="usernameLabel">Username</p>
                <input name='displayName' id='username' type='text'></input>
                <p>Email</p>
                <input name='email' id='email' type="email"></input>
                <p>Password</p>
                <input name='password' id='password' type="password"></input>
                <p>Repeat Password</p>
                <input className="passwordInput" type="password"></input>
                <button type='submit' id='signup'>Sign Up</button>
                <div className='l1'>
                    <h4 id="message">Already have an account?</h4>
                    <Link id="logSign"to='/login'>Login!</Link>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Signup);