import React, { Component } from 'react';
import './App.css';
import fire from './fire';
import Home from './components/main/home/Home.js';
import CAwithTimer from './components/CookAsst/CAwithTimer';


class App extends Component {
  render() {
    return (
      <div className="App">
	<Home/>
        <CAwithTimer />
      </div>
    );
  }
}

export default App;
