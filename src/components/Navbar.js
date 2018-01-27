import React, { Component } from 'react';
import portrait from '../static/img/portrait.jpg';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className = "Navbar" >
        <Menu pointing secondary vertical>
          <Menu.Header>
            <img src={portrait} height= '100px' />
            <h4> John Francis </h4>
            </Menu.Header>
            <br/>
            <br/>
          <Link to="/home">
            <Menu.Item name='My Recipes' active={activeItem === 'My Recipes' } onClick={this.handleItemClick}> My Recipes </Menu.Item>
          </Link>

          <Link to="/">
          <Menu.Item name='Saved Recipes' active={activeItem === 'Saved Recipes'} onClick={this.handleItemClick}>Saved Recipes</Menu.Item>
          </Link>

          <Link to="/">
          <Menu.Item name='Search' active={activeItem === 'Search'} onClick={this.handleItemClick} >Search</Menu.Item>
          </Link>

          <Link to="/">
          <Menu.Item name='Create New Recipes' active={activeItem === 'Create New Recipes'} onClick={this.handleItemClick}>Create New Recipes</Menu.Item>
          </Link>

          <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />

        </Menu>
      </div>
    )
  }
}

export default Navbar;
