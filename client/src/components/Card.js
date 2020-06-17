import React, { Component } from "react";
import '../App.css';
import axios from 'axios';
import firebase from 'firebase';
import Comment from './Comment';
import { Link } from "react-router-dom";
import x from '../images/x.png';
import pic from '../images/pic.png';
import fpic from '../images/fpic.png';
import edit from '../images/edit.png';
import expand from '../images/new2.png'
import delete1 from '../images/delete.png';


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
            follow: 'Followed'
        })
        e.preventDefault()
        axios.put('/api/follow/' + this.state.username, this.state)
            .then(res => {
                console.log(res)
            })
    }
    save = e => {
        this.setState({
            save: 'Saved'
        })
        e.preventDefault()
        axios.put('/api/save/' + this.state.username, this.state)
            .then(res => {
                console.log(res)
            })
    }

    report = e => {
        this.setState({
            report: 'Reported'
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
                    <button className='f' ><img className='visnone' src={expand} alt=''/></button>
                    <div className={this.state.class}>
                        <div>
                            <button className='x1' onClick={this.close}><img className='x' src={x} alt=''/></button>
                            <h3 className='title'>{this.props.card.title}</h3>
                        </div>
                        <div>
                            <img alt={this.props.card.title} src={this.props.card.image_link}/>
                            <div className='postBody'>
                                <p>{this.props.card.description}</p>
                                <div className='qLinks'>
                                    <a href={this.props.card.image_link} target='_blank' rel="noopener noreferrer"><img title='direct image link' className='pic' src={pic} alt=''/></a>
                                    <a href={this.props.card.file_link} target='_blank' rel="noopener noreferrer"><img title='file link' className='fpic' src={fpic} alt=''/></a>
                                </div>
                            </div>
                        </div>
                        
                        <form className='newComment' onSubmit={this.submitHandler}>
                            <textarea 
                                name='comment' 
                                value={comment} 
                                placeholder='add a comment...'
                                onChange={this.changeHandler}
                                ></textarea>
                            <button type="submit" className="submitCmnt">submit comment</button>
                        </form>
                        <h2 id='commentSubmited' className={this.state.commentSubmited}>comment submited!</h2>
                        <h3>Comments</h3>
                        <div className={this.state.commentCard}>
                            <p className={this.state.commentName}>{this.state.username}</p>
                            <p className={this.state.commentCard} >{this.state.newComment}</p>
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
                            <Link to={'/profile/' + this.props.card.username} className='usrnm'> {this.props.card.username} </Link>
                            <h3 className='title'>{this.props.card.title}</h3>
                            <Link className={this.props.edit} to={"edit/" + this.state.postID} ><img src={edit} alt='' className='editImg' title='edit post'/></Link>
                            <button className={this.props.dlt} onClick={this.delete}><img src={delete1} alt='' className='deleteImg' title='delete post'/></button>
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