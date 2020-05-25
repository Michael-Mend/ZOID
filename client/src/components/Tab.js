import React from "react";
import '../style/App.css'

function explore() {
    
}

function dashboard() {

}

function Tab() {
    return (
        <div className="tab">
            <nav className="navTab">
                <ul>
                    <li className="explore" id="selected"><button onClick={explore}>Explore</button></li>
                    <li className="dashboard"><button onClick={dashboard}>Dashboard</button></li>
                </ul>
            </nav>
        </div>
    )
};

 export default Tab;
