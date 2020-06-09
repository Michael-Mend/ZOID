import React, { Component } from "react";
import '../App.css';
import expand from '../images/new2.png'
// import { Link } from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <div className='cardMain'>
                <div className='expand'>
                    <button><img  src={expand} alt=''/></button>
                </div>
                <div className='card'>
                    <img title='reveal post' className='thumb' alt='' src={this.props.card.image_link}/>
                    <div> 
                        <div className='titleDiv'>
                            <h3 className='title'>{this.props.card.title}</h3>
                            <h4> {this.props.card.username} </h4>
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
                <div className='postBody'>
                    <p>{this.props.card.description}</p>
                </div>
            </div>
        )
    }
}

 export default Card;