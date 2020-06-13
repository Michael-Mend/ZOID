import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import axios from 'axios';
import Thumb from '../images/ph.png';
import app from '../base';
import firebase from 'firebase';

class Home extends Component {
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
        axios.get(process.env.ATLAS_URI || 'http://localhost:5000/api/posts')
        .then(res => {
          console.log(res.data)
          const data = res.data
          this.setState({
              data: data
          })
          console.log(this.state.data)
        })
        .catch(err => {
          console.log(err)
        })
    }   
    
    render() {
        const { data, dlt, edit, user } = this.state
        return (
            <div>
                <div className='userDiv'>
                    <p>{user}</p>
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

export default Home;
