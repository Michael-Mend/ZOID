import React, { Component } from "react";
import '../App.css';
import expand from '../images/new2.png';
import axios from 'axios';
import firebase from 'firebase';
import Comment from './Comment';
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        const user = firebase.auth().currentUser;

        super(props) 

        this.state = {
           class: 'hidden',
           comment: '',
           username: user.displayName,
           postID: this.props.card._id,
           res: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/comment/' + this.state.postID)
        .then(res => {
            console.log(res.data)
            const data = res.data
            this.setState({
                res: data
            })
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/comment/', this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    expand = () => {
       this.setState({class: 'expanded'})
    }
    close = () => {
        this.setState({class: 'hidden'})
    }

    delete = e => {
        e.preventDefault()
        axios.delete('http://localhost:5000/api/delete/' + this.props.card._id)
        .then(res => {
            console.log(res)
        })
        .then(
            window.location.replace('/')
        )
        .catch(err => {
            console.log(err)
        }) 
    }

    follow = e => {
        e.preventDefault()
        axios.update('http://localhost:5000/api/follow/', this.props.card.username)
    }
    
    render() {
        const { comment, res } = this.state
        return (
            <div className='cardMain'>
                <div className='expand'>
                    <button onClick={this.expand}><img  src={expand} alt=''/></button>
                    <div className={this.state.class}>
                        <div>
                            <button onClick={this.close}>close</button>
                            <h3 className='title0'>{this.props.card.title}</h3>
                        </div>
                        <div>
                            <img alt={this.props.card.title} src={this.props.card.image_link}/>
                            <div className='postBody'>
                                <p>{this.props.card.description}</p>
                                <div className='qLinks'>
                                    <a href={this.props.card.image_link}>image link</a>
                                    <a href={this.props.card.file_link}>download link</a>
                                </div>
                            </div>
                        </div>
                        <div className='postLinks1'> 
                            <a className='postLink1' href='/'>follow</a>
                            <a className='postLink1' href='/'>share</a>
                            <a className='postLink1' href='/'>save</a>
                            <a className='postLink01' href='/'>report</a>
                        </div>
                        <form className='newComment' onSubmit={this.submitHandler}>
                            <textarea 
                                name='comment' 
                                value={comment} 
                                placeholder='add a comment...'
                                onChange={this.changeHandler}
                                ></textarea>
                            <button type="submit">submit comment</button>
                        </form>
                        <h3>Comments</h3>
                        {res.map( comment => {
                            return <Comment key={comment._id} comment={comment}/>
                        })}
                    </div>
                </div>
                <div className='card'>
                    <img title='reveal post' className='thumb' alt={this.props.card.title} src={this.props.card.image_link}/>
                    <div> 
                        <div className='titleDiv'>
                            <h4 className='usrnm'> {this.props.card.username} </h4>
                            <h3 className='title'>{this.props.card.title}</h3>
                            <Link className={this.props.edit} to={"edit/" + this.state.postID} >edit</Link>
                            <button className={this.props.dlt} onClick={this.delete}>delete</button>
                        </div>
                        <div className='postLinks'> 
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