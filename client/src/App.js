import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
