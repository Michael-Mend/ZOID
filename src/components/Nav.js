import React from "react";
import '../App.css'
import { Link, useLocation } from "react-router-dom";


function Nav() {
    const location = useLocation();

    return (
        <div className="tabs">
            <h5 className="tab0"><Link className='link active' to='/'>Dashboard</Link></h5>
            <h5 className="tab1"><Link className='link' to='/discover'>Discover</Link></h5>
            <h5 className="tab1"><Link className='link' to='/profile'>My Posts</Link></h5>
            <h5 className="tab1"><Link className='link' to='/new'>New Post</Link></h5>
        </div>
    )
};

 export default Nav;