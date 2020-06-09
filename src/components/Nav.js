import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div className="tabs">
            <h5 className="tab0"><Link className='link active' to='/'>Dashboard</Link></h5>
            <h5 className="tab1"><Link className='link' to='/discover'>Discover</Link></h5>
            <h5 className="tab1"><Link className='link' to='/profile'>My Posts</Link></h5>
            <h5 className="tab1"><Link className='link' to='/saved'>Saved Posts</Link></h5>
        </div>
    )
};

 export default Nav;
 