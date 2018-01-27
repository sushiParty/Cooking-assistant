import React, { Component } from 'react';
import portrait from '../static/img/portrait.jpg'

class Navbar extends Component {

  render() {
    return (
      <div className= "Navbar">
        <div class="ui vertical menu">
          <div class="item">
            <img className="profilePic" src={portrait} />
            <a > John Francis </a>
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
          <div class="link item">
            <a > Search </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
