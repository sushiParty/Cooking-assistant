import React, { Component } from 'react';
import { fire, storage } from '../../fire.js';
import Home from './home/Home.js';

class Main extends Component {
  render() {
    return (
      <div>
	<Home/>
      </div>
    );
  }
}

export default Main;
