import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import axios from 'axios';
import Thumb from '../images/ph.png';
import firebase from 'firebase';
import app from '../base';

class UserPosts extends Component {
    constructor(props) {
        const user = firebase.auth().currentUser;

        super(props) 

        this.state = {
            title: '',
            description: '',
            image_link: Thumb,
            file_link: '',
            username: user.displayName,
            data: [],
            dlt: 'delete',
            edit: 'edit'
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/myposts/' + this.state.username)
        .then(res => {
          const data = res.data
          this.setState({
              data: data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }   
    
    render() {
        const { data, dlt, edit, username } = this.state
        return (
            <div>
                <div className='userDiv'>
                    <p>{username}</p>
                    <button className='signout' onClick={() => app.auth().signOut()}>sign out</button>
                </div>
                <SearchBar />
                <Nav />
                {data.map( card => {
                    return <Card card={card} dlt={dlt} edit={edit} />
                })}
            </div>
        )
    }
};

export default UserPosts;
