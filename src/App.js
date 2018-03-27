import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorDisplay from './ErrorDisplay'
import DataList from './DataList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorDisplay>
          <DataList />    
        </ ErrorDisplay>
      </div>
    );
  }
}

export default App;
