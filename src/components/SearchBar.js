import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    return (
      <Input fluid icon='search' placeholder='Search...' />
    );
  }
}

export default SearchBar;
