import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import axios from 'axios';
import Thumb from '../images/ph.png';
import app from '../base';
import firebase from 'firebase';
import Tags from "./Tags";
import arw from '../images/arw.png'

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
        axios.get('/api/posts')
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
        const { data, dlt, edit, user } = this.state
        return (
            <div>
                <div className='userDiv'>
                <button className='signout' onClick={() => app.auth().signOut()}><img title='sign out' className='so' src={arw} alt=''/></button>
                    <p>{user}</p>
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

export default Home;
