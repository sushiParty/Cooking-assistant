import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className= "Navbar">
        <div class="ui vertical menu">
          <div class="item">
            <Link to="/ " > My Recipes </Link>
          </div>
          <div class="link item">
            <Link to="/"> Saved Recipes </Link>
          </div>
          <div class="link item">
            <Link to="/" > Create New Recipe </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
