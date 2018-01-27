import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className= "Navbar">
        <div className="ui vertical menu">
          <div className="item">
            <Link to="/ " > My Recipes </Link>
          </div>
          <div className="link item">
            <Link to="/"> Saved Recipes </Link>
          </div>
          <div className="link item">
            <Link to="/" > Create New Recipe </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
