import React, { Component } from "react";
import "../App.css";
import firebase from 'firebase';
import app from '../base';


class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        const user = firebase.auth().currentUser.displayName;
        this.setState({
            username: user
        })
    }    

    render() {
        const { username } = this.state
        return (
            <div className='userDiv'>
                <p>{username}</p>
                <button className='signout' onClick={() => app.auth().signOut()}>sign out</button>
            </div>
        )
    }
}

export default User