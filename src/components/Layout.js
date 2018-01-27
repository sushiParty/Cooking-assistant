import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar'


export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
        </div>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
