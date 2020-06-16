import React, { Component } from "react";
import '../App.css';
import New from '../images/new.png'
import { Link } from "react-router-dom";
import Img from '../images/srch.png';

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

    handleKeyDown = e => {
        if (e.key === 'Enter') {
            console.log(this.state.search)
        }
    }

    render() {
        return (
            <div className="searchbar">
                <Link className="searchBtn" to={"/search/" + this.state.search}><img alt='' className='srchImg' src={Img}/></Link>
                <input 
                    onKeyDown={this.handleKeyDown}
                    type="text" 
                    placeholder="Search by tag.." 
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