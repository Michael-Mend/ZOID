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
           res: [],
           following: this.props.card.username,
           commentCard: 'hidden',
           commentSubmited: 'hidden',
           commentName: 'hidden',
           saved: this.props.card._id,
           report: 'Report',
           follow: 'Follow',
           save: 'Save'
        }
    }

    componentDidMount() {
        axios.get('/api/comment/' + this.state.postID)
        .then(res => {
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
        axios.post('/api/comment', this.state)
        .then(res => {
            this.setState({
                commentSubmited: 'commentSubmited',
                newComment: this.state.comment,
                commentCard: 'commentCard',
                commentName: 'commentName',
                comment: ''
            })
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
        axios.delete('/api/delete/' + this.props.card._id)
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
        this.setState({
            follow: 'followed'
        })
        e.preventDefault()
        axios.put('/api/follow/' + this.state.username, this.state)
            .then(res => {
                console.log(res)
            })
    }
    save = e => {
        this.setState({
            save: 'saved'
        })
        e.preventDefault()
        axios.put('/api/save/' + this.state.username, this.state)
            .then(res => {
                console.log(res)
            })
    }

    report = e => {
        this.setState({
            report: 'reported'
        })
        e.preventDefault()
        axios.post('/api/report/', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            }) 
    }
    
    render() {
        const { comment, res } = this.state
        return (
            <div className='cardMain'>
                <div className='expand'>
                    {/* moved button to pic for mobile query */}
                    <button id="expandIcon"onClick={this.expand}><img  src={expand} alt=''/></button>
                    <div className={this.state.class}>
                        <div>
                            <button onClick={this.close}><i id="closeBtn"class="large material-icons">close</i></button>
                            <p id="title">Post Title:</p>
                            <p className='title0'> {this.props.card.title}</p>
                        </div>
                        <div>
                            <img alt={this.props.card.title} src={this.props.card.image_link}/>
                            <div className='postBody'>
                                
                            <p id="desc">Description:</p>
                                <p id="descBox"> {this.props.card.description}</p>
                                <div className='qLinks'>
                                    <a href={this.props.card.image_link} target='_blank' rel="noopener noreferrer"><i id="link" class="material-icons">link</i></a>
                                    {/* <a href={this.props.card.file_link} target='_blank' rel="noopener noreferrer">File Link</a> */}
                                    
                                </div>
                            </div>
                        </div>
                        
                        <form className='newComment' onSubmit={this.submitHandler}>
                            <input 
                                name='comment' 
                                value={comment} 
                                placeholder='Add a comment...'
                                onChange={this.changeHandler}
                                ></input>
                            <button type="submit" className="submitCmnt"><i id="link" class="material-icons">chat</i></button>
                        </form>
                        <h2 id='commentSubmited' className={this.state.commentSubmited}>Comment Submited!</h2>
                       {/* <h3><i id="link" class="material-icons">chat</i></h3> */}
                        <div className={this.state.commentCard}>
                            <p className={this.state.commentName}>{this.state.username}</p> 
                            <p className={this.state.commentCard}>{this.state.newComment}</p>
                            
                        </div>
                        {res.map( comment => {
                            return <Comment key={comment._id} comment={comment}/>
                        })}
                    </div>
                </div>
                <div className='card'>
                    <img onClick={this.expand} className='thumb' alt={this.props.card.title} src={this.props.card.image_link}/>
                    <div> 
                        <div className='titleDiv'>
                            <Link id="us"to={'/profile/' + this.props.card.username} className='usrnm'> {this.props.card.username} </Link>
                            <h3 className='title'> {this.props.card.title}</h3>
                            <Link className={this.props.edit} to={"edit/" + this.state.postID} ><i id="editBtn"class="large material-icons">edit</i></Link>
                            <button id="delete" className={this.props.dlt} onClick={this.delete}><i class="large material-icons">delete_forever</i></button>
                        </div>
                        <div className='postLinks'> 
                    <button onClick={this.follow} className='postLink'>{this.state.follow}</button>
                            <button onClick={this.save} className='postLink'>{this.state.save}</button>
                            <button onClick={this.report} className='postLink0'>{this.state.report}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

 export default Card;