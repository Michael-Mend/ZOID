import React , { Component } from "react";
import '../App.css';
import Thumb from '../images/ph.png'
import axios from 'axios'
// import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        this.state = {
            title: '',
            description: '',
            image_link: '',
            file_link: '',
            username: ''
        }
    }
    render() {
        return (
            <div className='card'>
                <img  className='thumb' alt='' src={Thumb}/>
                <div> 
                    <div className='titleDiv'>
                    <h3 className='title'>Post Title</h3>
                    <h4> username </h4>
                    </div>
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
    }
}

 export default Card;