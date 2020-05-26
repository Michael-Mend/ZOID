import React from "react";
import "../App.css";

function New() {
    return(
        <div className="newPost">
            <h2>New Post</h2>
            <h5>Title</h5>
            <input className="titleInput" type="text"></input>
            <h5>Description</h5>
            <textarea className="descInput"></textarea>
        </div>
    )
}

export default New;