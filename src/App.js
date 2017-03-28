import React, { Component } from 'react';
import './App.css';

const ENVIRONMENT = process.env.REACT_APP_ENV || 'not found';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I Deleted the header!</h1>
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
