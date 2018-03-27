import React, { Component } from 'react';
import axios from 'axios';


export default class DataList extends Component {
    state = {
        posts: [], // set initial component state
        error: null
    }    
    componentDidMount(){
        let self = this;
        axios.get('https://techcrunch.com/wp-json/tc/mobile/v1/posts/featured') //retrieve data from server
        .then(function (response) {      
          self.setState({posts: response.data.posts});            
        })
        .catch(function (error) {
          self.setState({error});            
        });
      }
    render(){
        if (this.state.error) {
            throw new Error("Error trying to retrieve data");
        }
        return <React.Fragment>
                    {this.state.posts.map((post) =>
                        <div key={post.id}>
                        <a href={post.url}>{post.title}</a>
                        <img src={post.featured_media.url} height="100" width="100"/>                 
                        <p>{post.excerpt}</p>
                        </div>)
                    }             
                </React.Fragment>       

    }
}
