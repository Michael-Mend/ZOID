import React from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";

function Home() {
    return (
        <div>
            <SearchBar />
            <Nav />
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card />
        </div>
    )
};

export default Home;
