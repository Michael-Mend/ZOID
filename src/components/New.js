import React, { Component } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import "../App.css";
import axios from 'axios';

class New extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            title: '',
            description: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/newpost', this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    render() {
        const { title, description } = this.state
        return(
            <div>
                <SearchBar />
                <Nav />
                <div className="newPost">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input 
                                type="text" 
                                name="title" 
                                value={title}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            name="description" 
                            value={description}
                            onChange={this.changeHandler}
                            />
                        </div>
                        <div>
                            <input type="text" name=""/>
                        </div>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default New
