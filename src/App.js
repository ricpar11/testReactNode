import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    posts: [] // set initial component state
  }
  componentDidMount(){
    let self = this;
    axios.get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured') //retrieve data from server
    .then(function (response) {      
      self.setState({posts: response.data.posts});            
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  


  render() {
    return (
      <div className="App">
            {this.state.posts.length > 0 ? this.state.posts.map((post) =>
              <div key={post.id}>
                <a href={post.url}>{post.title}</a>
                <img src={post.featured_media.url} style={{display: "inline-block"}} height="100" width="100"/> 
                <p>{post.excerpt}</p>
              </div>)
              :
              <p>Error trying to retrieve data</p>
            }
      </div>
    );
  }
}

export default App;
