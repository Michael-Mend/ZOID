import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import New from './components/New';
import Discover from './components/Discover';
import Login from './components/Login';
import Signup from './components/Signup';
import MyPosts from './components/UserPosts';
import Search from './components/Search';
import Profile from './components/Profile';
import Edit from './components/Edit';
import Saved from './components/Saved';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router> 
            <Header />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/myposts" component={MyPosts} />
            <PrivateRoute exact path="/New" component={New} /> 
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} /> 
            <PrivateRoute exact path="/discover" component={Discover} />
            <PrivateRoute exact path="/saved" component={Saved} />
            <PrivateRoute exact path="/edit/:id" component={Edit} />
            <PrivateRoute exact path="/search/:tag" component={Search} />
            <PrivateRoute exact path="/profile/:username" component={Profile} />
        </Router>
      </AuthProvider>
    );
  }
};

export default App;
