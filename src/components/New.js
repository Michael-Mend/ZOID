import React from "react";
import Plus from "../images/new.png";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "../App.css";

const New = () => {
    
    function newPost() {
        
    }

    return(
        <div>
            <SearchBar />
            <Nav />
            <div className="newPost">
                <form onSubmit={newPost}>
                    <h2 className="titleLabel">Post Title</h2>
                    <input type='text'></input>
                    <h2 className="descLabel">Post Description</h2>
                    <textarea></textarea>
                    <div>
                        <button><img className="newImg" src={Plus} alt=''/></button>
                        <h2 className="imgLabel">Add Images</h2>
                    </div>
                    <div>
                        <button><img className="newFile" src={Plus} alt=''/></button>
                        <h2 className="fileLabel">Add File</h2>
                        <button id='submitNew' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New;