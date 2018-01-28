import React, { Component } from 'react';
import portrait from '../static/img/portrait.jpg';
import { Switch, Route, Link } from 'react-router-dom';

import { Sidebar, Segment, Button, Icon, Header, Menu } from 'semantic-ui-react';
import './navbar.css';

import Main from './main/Main.jsx';
import SearchBar from './SearchBar.js';


class Navbar extends Component {
  state = {
    visible: true,
    activeItem: 'home'
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    const { visible } = this.state;
    const { activeItem } = this.state;

    return (
      <div className="navbar-wrapper">
	<div>
	  <div className="navbar-button">
            <Button onClick={this.toggleVisibility}>≅Barz</Button>
	  </div>
	  <div className="top-search-bar">
	    <SearchBar/>
	  </div>
	</div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} vertical inverted>
	    <Link to="/home">
              <Menu.Item name='Home' active={activeItem === 'Home' } onClick={this.handleItemClick}> Home </Menu.Item>
            </Link>

            <Link to="/">
              <Menu.Item name='My Recipes' active={activeItem === 'My Recipes'} onClick={this.handleItemClick}>My Recipes</Menu.Item>
            </Link>

            <Link to="/">
              <Menu.Item name='Saved Recipes' active={activeItem === 'Saved Recipes'} onClick={this.handleItemClick}>Saved Recipes</Menu.Item>
            </Link>

            <Link to="/">
              <Menu.Item name='New Recipe' active={activeItem === 'New Recipe'} onClick={this.handleItemClick}> New Recipe </Menu.Item>
            </Link>

            <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
	      <Switch>
		<Route path="/home" component={ Main }/>
              // <Route path="/myrecipes" component={ Main }/>
              // <Route path="/savedrecipes" component={ Main }/>
	      </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Navbar;
