import React, { Component } from "react";
import '../App.css';
import expand from '../images/new2.png'

class Card extends Component {
    constructor(props) {
        super(props) 

        this.state = {
           class: 'hidden'
        }
    }

    expand = () => {
       this.setState({class: 'expanded'})
    }

    close = () => {
        this.setState({class: 'hidden'})
    }

    render() {
        return (
            <div className='cardMain'>
                <div className='expand'>
                    <button onClick={this.expand}><img  src={expand} alt=''/></button>
                    <div className={this.state.class}>
                        <button onClick={this.close} className='close'>close</button>
                        <h3 className='title0'>{this.props.card.title}</h3>
                        <p>{this.props.card.description}</p>
                        <img alt='' src={this.props.card.image_link}/>
                    </div>
                </div>
                <div className='card'>
                    <img title='reveal post' className='thumb' alt='' src={this.props.card.image_link}/>
                    <div> 
                        <div className='titleDiv'>
                            <h4 className='usrnm'> {this.props.card.username} </h4>
                            <h3 className='title'>{this.props.card.title}</h3>
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
            </div>
        )
    }
}

 export default Card;