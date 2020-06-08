import React from "react";
import '../App.css';
import Thumb from '../images/ph.png'
// import { Link } from "react-router-dom";

function Card() {
    return (
        <div className='card'>
            <img  className='thumb' alt='' src={Thumb}/>
            <div> 
                <h3 className='title'>Post Title</h3>
                <div className='postLinks'> 
                    <a className='postLink' href='/'>comment</a>
                    <a className='postLink' href='/'>download</a>
                    <a className='postLink' href='/'>follow</a>
                    <a className='postLink' href='/'>share</a>
                    <a className='postLink' href='/'>save</a>
                    <a className='postLink0' href='/'>report</a>

                </div>
            </div>
        </div>
    )
};

 export default Card;