import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import app from '../base';
import Thumb from '../images/ph.png';
import firebase from 'firebase';
import axios from "axios";
import Tags from "./Tags";

class Search extends Component {
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
        const { tag } = this.props.match.params
        console.log(tag)
        axios.get('/api/search/' + tag)
            .then(res => {
            const data = res.data
            console.log(data)
            this.setState({
                data: data
            })
        })
    }

    render() {
        const { data, dlt, edit, user } = this.state
        return (
            <div>
               <div className='userDiv'>
                <button className='signout' onClick={() => app.auth().signOut()}><i id="signOut" class="large material-icons">arrow_back</i></button>
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

export default Search;
