import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Tags from "./Tags";
import Card from "./Card";
import axios from 'axios';
import Thumb from '../images/ph.png';
import firebase from 'firebase';
import app from '../base';
import arw from '../images/arw.png'

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
        axios.get('/api/myposts/' + this.state.username)
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
                    <button className='signout' onClick={() => app.auth().signOut()}><img title='sign out' className='so' src={arw} alt=''/></button>
                    <p>{username}</p>
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

export default UserPosts;
