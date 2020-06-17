import React, { Component } from "react";
import '../App.css'
import { Link } from "react-router-dom";

class Tags extends Component {
    render() {
        return (
            <div className="tagsDiv">
                <div className="tags">
                    <Link to={"/search/art"}>Art</Link>
                    <Link to={"/search/music"}>Music</Link>
                    <Link to={"/search/design"}>Design</Link>
                    <Link to={"/search/games"}>Games</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/3D%20printing"}>3D Printing</Link>
                    <Link to={"/search/science"}>Science</Link>
                    <Link to={"/search/song"}>Song</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/painting"}>Painting</Link>
                    <Link to={"/search/drawing"}>Drawing</Link>
                    <Link to={"/search/sculpture"}>Sculpture</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/poem"}>Poem</Link>
                    <Link to={"/search/3D%20model"}>3D Model</Link>
                    <Link to={"/search/code"}>Code</Link>
                </div>
                <div className="tags2">
                    <Link to={'/search/photography'}>Photography</Link>
                    <Link to={"/search/tech"}>Tech</Link>
                    <Link to={"/search/ceramics"}>Ceramics</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/space"}>Space</Link>
                    <Link to={"/search/cartoon"}>Cartoon</Link>
                    <Link to={"/search/animation"}>Animation</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/paint"}>Paint</Link>
                    <Link to={"/search/water color"}>Water Color</Link>
                    <Link to={"/search/pastel"}>Pastel</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/film"}>Professional</Link>
                    <Link to={"/search/digital"}>Digital</Link>
                    <Link to={"/search/amatuer"}>Amatuer</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/poem"}>Film</Link>
                    <Link to={"/search/sound design"}>Sound Design</Link>
                    <Link to={"/search/VFX"}>VFX</Link>
                </div>
                <div className="tags2">
                    <Link to={'/search/graphic design'}>Graphic Design</Link>
                    <Link to={"/search/3D render"}>3D Render</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/blender"}>Blender</Link>
                    <Link to={"/search/fusion360"}>Fusion360</Link>
                    <Link to={"/search/CAD"}>CAD</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/landscape"}>Landscape</Link>
                    <Link to={"/search/portrait"}>Portrait</Link>
                    <Link to={"/search/character"}>Character</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/animal"}>Animal</Link>
                    <Link to={"/search/architecture"}>Architecture</Link>
                    <Link to={"/search/pencil"}>Pencil</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/poem"}>Poem</Link>
                    <Link to={"/search/3D%20model"}>3D Model</Link>
                    <Link to={"/search/code"}>Code</Link>
                </div>
                <div className="tags2">
                    <Link to={'/search/photography'}>Photography</Link>
                    <Link to={"/search/tech"}>Tech</Link>
                    <Link to={"/search/ceramics"}>Ceramics</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/3D%20printing"}>3D Printing</Link>
                    <Link to={"/search/science"}>Science</Link>
                    <Link to={"/search/"}>Song</Link>
                </div>
            </div>
        )
    }
}

export default Tags;