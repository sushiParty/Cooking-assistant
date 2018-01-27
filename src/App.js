import React, { Component } from 'react';
import './App.css';
import fire from './fire';
import Home from './components/main/home/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
	<Home/>
      </div>
    );
  }
}

export default App;
