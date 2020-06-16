import React, { Component } from "react";
import Nav from "./Nav";
import Tags from "./Tags";
import SearchBar from "./SearchBar";
import "../App.css";
import axios from 'axios';
import firebase from 'firebase';
import app from '../base';

class New extends Component {
    constructor(props) {
        const user = firebase.auth().currentUser;

        super(props) 

        this.state = {
            title: '',
            description: '',
            image_link: '',
            file_link: '',
            tag: '',
            username: user.displayName
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/api/newpost', this.state)
        .then(res => {
            console.log(res)
        })
        .then(
            window.location.replace('/')
        )
        .catch(err => {
            console.log(err)
        }) 
    }

    render() {
        const { title, description, image_link, file_link, tag, username } = this.state
        return(
            <div>
                <div className='userDiv'>
                <button className='signout' onClick={() => app.auth().signOut()}><i id="signOut" class="large material-icons">arrow_back</i></button>
                    <p>{username}</p>
                </div>
                <Tags />
                <SearchBar />
                <Nav />
                <div className="newPost">
                    <h3>Submit a post</h3>
                    <form onSubmit={this.submitHandler}>
                        <p>Title</p>
                        <div id="newPostInput">
                            <input 
                                type="text" 
                                name="title" 
                                value={title}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p>Tag</p>
                        <div>
                            <input
                                placeholder="optional"
                                type="text" 
                                name="tag" 
                                value={tag}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div>
                            <p>Image Link</p>
                            
                        </div>
                        <div>
                            <input
                                placeholder="must be a direct image link"
                                type="text" 
                                name="image_link"
                                value={image_link}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <h7>We recommend using, 
                                <a href='https://imgur.com' target='_blank' rel="noopener noreferrer">
                                    imgur
                                </a> 
                            to host your image!</h7> 
                        <p>File Link</p>
                        <div>
                            <input
                                placeholder="optional"
                                type="text" 
                                name="file_link"
                                value={file_link}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p>Description</p>
                        <div>
                            <textarea
                                type="text" 
                                name="description" 
                                value={description}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default New
