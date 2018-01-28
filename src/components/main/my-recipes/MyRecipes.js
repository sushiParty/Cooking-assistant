import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import {fire, storage} from '../../../fire';

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.db = fire.database().ref().child('Recipes');

    this.state = {
      recipeName: ''}
  }

  componentDidMount() {
    this.db.child('Almond Flour Waffles').child('difficulty').on('value', snapshot => {
      this.setState({recipeName: snapshot.val()})
    });
  }

  render() {
    return (
      <div>
	      <Header>My Recipes</Header>
        <p className="" className="text-center">
          {this.state.recipeName}
        </p>
      </div>
    );
  }
}

export default MyRecipes;
