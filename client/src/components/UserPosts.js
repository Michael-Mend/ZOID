import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import User from "./User";
import axios from 'axios';
import Thumb from '../images/ph.png'
import firebase from 'firebase';

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
        const { data, dlt, edit } = this.state
        return (
            <div>
                <User />
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
