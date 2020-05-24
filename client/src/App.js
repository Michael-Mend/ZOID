import React, { Component } from "react";
import Nav from "./components/Nav"
import Tab from "./components/Tab"
import SearchBar from "./components/SearchBar"
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar />
        <Tab />
      </div>
    );
  }
}

export default App;
