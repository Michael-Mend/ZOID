import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import Card from "./Card";
import User from "./User";
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
            data: [],
            dlt: 'hidden',
            edit: 'hidden'
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
        const { data, dlt, edit } = this.state
        return (
            <div>
                <User />
                <SearchBar />
                <Nav />
                {data.map( card => {
                    return <Card card={card} dlt={dlt} edit={edit} />
                })}
            </div>
        )
    }
};

export default Home;
