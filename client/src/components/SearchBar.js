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

    render() {
        return (
            <div className="searchbar">
                <Link className="searchBtn" to={"/search/" + this.state.search}><img className='srchImg' src={Img}/></Link>
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