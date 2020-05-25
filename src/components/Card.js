import React from "react";
import '../App.css';
import Thumb from '../images/ph.png'
import { Link } from "react-router-dom";

function Card() {
    return (
        <div className='card'>
            <img  className='thumb' src={Thumb}/>
            <div> 
                <h3 className='title'>Post Title</h3>
                <div className='postLinks'> 
                    <Link className='postLink' >comment</Link>
                    <Link className='postLink' >download</Link>
                    <Link className='postLink' >follow</Link>
                    <Link className='postLink' >save</Link>
                </div>
            </div>
        </div>
    )
};

 export default Card;