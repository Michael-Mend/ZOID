import React from "react";
import '../style/App.css'

function Tab() {
    return (
        <div className="tab">
            <nav className="navTab">
                <ul>
                    <li><a>Explore</a></li>
                    <li id="selected"><a>Dashboard</a></li>
                </ul>
            </nav>
        </div>
    )
};
 export default Tab;
