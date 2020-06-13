import React, { Component } from "react";
import '../App.css';
import New from '../images/new.png'
import { Link } from "react-router-dom";
import axios from "axios";

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        
    }

    render() {
        return (
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder="search" 
                    className="search" 
                    name="search" 
                    onChange={this.changeHandler}
                />
                <Link to="/new"><img className="new" src={New} alt='' title='new post'/></Link>
            </div>
        )
    }
};

 export default SearchBar;