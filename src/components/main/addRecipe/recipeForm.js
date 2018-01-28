import React, { Component } from 'react';
import './displayRecipe.css'

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRecipeContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
    }
    
    handleUserInput(e) {
        this.setState({
            newRecipeContent: e.target.value,
        })
    }

    saveRecipe() {

        this.props.addRecipe(this.state.newRecipeContent);

        this.setState({
            newRecipeContent: '',
        })
    }

    render() {
        return (
            <div className="formWrapper text-center">
                <input className="recipeInput recipe-header"
                placeholder="Write a new recipe..." value={this.state.newRecipeContent} onChange={this.handleUserInput}/>
                <button className="recipeButton recipe-header" onClick={this.saveRecipe}>Add Recipe</button>
            </div>
        )
    }
}

export default RecipeForm