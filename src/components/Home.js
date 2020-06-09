import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import axios from 'axios';
import Thumb from '../images/ph.png'

class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            title: '',
            description: '',
            image_link: Thumb,
            file_link: '',
            username: '',
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/posts')
        .then(res => {
          console.log(res.data)
          const data = res.data
          this.setState({
              data: data
          })
          console.log(this.state.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    
    render() {
        let {data} = this.state
        return (
            <div>
                <SearchBar />
                <Nav />
                {data.map( card => {
                    return <Card card={card} />
                })}
            </div>
        )
    }
};

export default Home;
