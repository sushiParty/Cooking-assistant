import React, { Component } from 'react';
import './App.css';
import fire from './fire';
import CAwithTimer from './components/CookAsst/CAwithTimer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CAwithTimer />
      </div>
    );
  }
}

export default App;
