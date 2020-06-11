import React, { Component } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import "../App.css";
import axios from 'axios';
import firebase from 'firebase';

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
        axios.post('http://localhost:5000/api/newpost', this.state)
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
        const { title, description, image_link, file_link, tag } = this.state
        return(
            <div>
                <SearchBar />
                <Nav />
                <div className="newPost">
                    <h3>submit a post</h3>
                    <form onSubmit={this.submitHandler}>
                        <p>title</p>
                        <div>
                            <input 
                                type="text" 
                                name="title" 
                                value={title}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p>tag</p>
                        <div>
                            <input
                                type="text" 
                                name="tag" 
                                value={tag}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p>image link</p>
                        <div>
                            <input
                                placeholder="must be a direct image link"
                                type="text" 
                                name="image_link"
                                value={image_link}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p>file link</p>
                        <div>
                            <input
                                type="text" 
                                name="file_link"
                                value={file_link}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p>description</p>
                        <div>
                            <textarea
                                type="text" 
                                name="description" 
                                value={description}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default New
