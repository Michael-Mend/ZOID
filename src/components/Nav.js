import React from "react";
import '../App.css'
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";


function Nav() {
    const location = useLocation();

    return (
        <div className="tabs">
            <h5 className="tab0"><Link to='/'  className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Dashboard</Link></h5>
            <h5 className="tab1"><Link to='/discover'  className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>Discover</Link></h5>
            <h5 className="tab1"><Link to='/profile'>My Posts</Link></h5>
            <h5 className="tab1"><Link to='/new'>New Post</Link></h5>
        </div>
    )
};

 export default Nav;