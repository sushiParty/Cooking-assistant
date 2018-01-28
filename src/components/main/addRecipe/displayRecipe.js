import firebase from '../../../fire';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './displayRecipe.css'

class DisplayRecipe extends Component {

  constructor(props) {
    super(props);
    this.recipeContent = props.recipeContent;
    this.recipeId = props.recipeId;
    this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this);
  }

  handleRemoveRecipe(id) {
    this.props.removeRecipe(id);
  }
    
  render(props) {
      return (
        <div className="displayRecipe recipe-header">
          <div className="recipeContent align-side"> {this.recipeContent}</div>
          <div className="closebtn align-side" onClick={() => this.handleRemoveRecipe(this.recipeId)}>
            &times;
          </div>
        </div>
      )
    }
}

DisplayRecipe.propTypes = {
  recipeContent: PropTypes.String
}
export default DisplayRecipe;