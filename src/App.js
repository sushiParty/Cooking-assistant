import React, { Component } from 'react';
import './App.css';
import fire from './fire';
import Home from './components/main/home/home.jsx';

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
