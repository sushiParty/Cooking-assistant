import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className= "Navbar">
        <div class="ui vertical menu">
          <div class="item">
            <a > User Infomation </a>
          </div>

          <div class="link item">
            <a > My Recipes </a>
          </div>
          <div class="link item">
            <a > Saved Recipes </a>
          </div>
          <div class="link item">
            <a > Create New Recipe </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
