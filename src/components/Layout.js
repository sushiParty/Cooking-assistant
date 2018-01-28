import React, { Component } from 'react';
import Navbar from './Navbar';
import { Routes, Switch } from 'react-router-dom';


export default class Layout extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
