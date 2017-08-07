import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    let url = 'https://api.github.com/repos/dvisockas/poems/contents/LT'
    let poems

    fetch(url).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    });

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my poems page</h2>
        </div>
        <p className="App-intro">
          Hope you have a curious read
        </p>
      </div>
    );
  }
}

export default App;
