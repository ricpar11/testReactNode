import React, { Component } from 'react';

export default class ErrorDisplay extends Component {
    state = {
        error: false
    }
    componentDidCatch(error,errorInfo){
        this.setState({error});
    }
    render(){
        if(this.state.error){
            return <p>Something went wrong.</p>
        }
        return this.props.children
    }
}