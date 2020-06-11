import React, { Component } from "react";
import '../App.css'


class Comment extends Component {
    render () {
        return (
            <div className="commentCard">
                <p className="commentName">{this.props.comment.username}</p>
                <p>{this.props.comment.comment}</p>
            </div>
        )
    }
};

 export default Comment;