import React from "react";
import '../App.css';
import New from '../images/new.png'
import { Link } from "react-router-dom";

function SearchBar() {
    return (
        <div className="searchbar">
            <input type="text" placeholder="search" className="search"></input>
            <Link to="/new"><img className="new" src={New} alt='' title='new post'/></Link>
        </div>
    )
};

 export default SearchBar;