import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ENVIRONMENT = process.env.REACT_APP_ENV || 'not found';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          I am the development environment and I live on another branch.
        </p>
        <p>
          Current environment: {ENVIRONMENT}
        </p>
      </div>
    );
  }
}

export default App;
