import React, { Component } from "react";
import '../App.css'
import { Link } from "react-router-dom";

class Tags extends Component {
    render() {
        return (
            <div className="tagsDiv">
                <div className="tags">
                    <Link to={"/search/art"}>art</Link>
                    <Link to={"/search/music"}>music</Link>
                    <Link to={"/search/design"}>design</Link>
                    <Link to={"/search/games"}>games</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/3D%20printing"}>3D printing</Link>
                    <Link to={"/search/science"}>science</Link>
                    <Link to={"/search/song"}>song</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/painting"}>painting</Link>
                    <Link to={"/search/drawing"}>drawing</Link>
                    <Link to={"/search/sculpture"}>sculpture</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/poem"}>poem</Link>
                    <Link to={"/search/3D%20model"}>3D model</Link>
                    <Link to={"/search/code"}>code</Link>
                </div>
                <div className="tags2">
                    <Link to={'/search/photography'}>photography</Link>
                    <Link to={"/search/tech"}>tech</Link>
                    <Link to={"/search/ceramics"}>ceramics</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/space"}>space</Link>
                    <Link to={"/search/cartoon"}>cartoon</Link>
                    <Link to={"/search/animation"}>animation</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/paint"}>paint</Link>
                    <Link to={"/search/water color"}>water color</Link>
                    <Link to={"/search/pastel"}>pastel</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/film"}>professional</Link>
                    <Link to={"/search/digital"}>digital</Link>
                    <Link to={"/search/amatuer"}>amatuer</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/poem"}>film</Link>
                    <Link to={"/search/sound design"}>sound design</Link>
                    <Link to={"/search/VFX"}>VFX</Link>
                </div>
                <div className="tags2">
                    <Link to={'/search/graphic design'}>graphic design</Link>
                    <Link to={"/search/3D render"}>3D render</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/blender"}>blender</Link>
                    <Link to={"/search/fusion360"}>fusion360</Link>
                    <Link to={"/search/CAD"}>CAD</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/landscape"}>landscape</Link>
                    <Link to={"/search/portrait"}>portrait</Link>
                    <Link to={"/search/character"}>character</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/animal"}>animal</Link>
                    <Link to={"/search/architecture"}>architecture</Link>
                    <Link to={"/search/pencil"}>pencil</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/poem"}>poem</Link>
                    <Link to={"/search/3D%20model"}>3D model</Link>
                    <Link to={"/search/code"}>code</Link>
                </div>
                <div className="tags2">
                    <Link to={'/search/photography'}>photography</Link>
                    <Link to={"/search/tech"}>tech</Link>
                    <Link to={"/search/ceramics"}>ceramics</Link>
                </div>
                <div className="tags2">
                    <Link to={"/search/3D%20printing"}>3D printing</Link>
                    <Link to={"/search/science"}>science</Link>
                    <Link to={"/search/"}>song</Link>
                </div>
            </div>
        )
    }
}

export default Tags;