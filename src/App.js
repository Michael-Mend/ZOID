import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Discover from './components/Discover'
// eslint-disable-next-line 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/discover" component={Discover} /> 
    </Router>
  );
}

export default App;
