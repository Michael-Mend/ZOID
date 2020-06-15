import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Tags from "./Tags";
import Card from "./Card";
import app from '../base';
import Thumb from '../images/ph.png';
import firebase from 'firebase';
import axios from "axios";

class Discover extends Component {
    constructor(props) {
        super(props)
        const user = firebase.auth().currentUser.displayName;
        this.state = {
            title: '',
            description: '',
            image_link: Thumb,
            file_link: '',
            username: '',
            data: [],
            dlt: 'hidden',
            edit: 'hidden',
            user: user
        }
    }

    componentDidMount() {
    }

    render() {
        const { data, dlt, edit, user } = this.state
        return (
            <div>
                <div className='userDiv'>
                    <p>{user}</p>
                    <button className='signout' onClick={() => app.auth().signOut()}>sign out</button>
                </div>
                <Tags />
                <SearchBar />
                <Nav />
                {data.map( card => {
                    return <Card card={card} dlt={dlt} edit={edit} />
                })}
            </div>
        )
    }
    
};

export default Discover;
