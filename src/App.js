import React, { Component } from 'react';
import './App.css';
import fire from './fire';
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
