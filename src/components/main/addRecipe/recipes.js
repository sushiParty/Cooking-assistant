import React, { Component } from 'react';
import DisplayRecipe from './displayRecipe.js';
import RecipeForm from './recipeForm';
import { fire, storage } from '../../../fire';
import './displayRecipe.css'


class Recipes extends Component {

    constructor(props) {
        super(props);
        this.addRecipe = this.addRecipe.bind(this);
        this.removeRecipe = this.removeRecipe.bind(this);

        this.db = fire.database().ref().child('recipes');
       
        this.state = {
            recipes: [
            ],
        }
    }

    componentWillMount() {
        const previousRecipes = this.state.recipes;

        this.db.on('child_added', snap => {
            previousRecipes.push({
                id: snap.key,
                recipeContent: snap.val().recipeContent,
            })

            this.setState({
                recipes: previousRecipes
            })
        })

        this.db.on('child_removed', snap =>{
            for(var i=0; i < previousRecipes.length; i++) {
                if(previousRecipes[i].id === snap.key) {
                    previousRecipes.splice(i, 1);
                }
            }

            this.setState({
                recipes: previousRecipes
            })
        })

        this.db.once('value', function (snap){
            snap.forEach (function (dish) {
                console.log(dish.val().Ingredients)
            })
        })

    }

    addRecipe(recipe) {
       this.db.push().set({recipeContent: recipe})
        
    }

    removeRecipe(recipeId) {
        this.db.child(recipeId).remove();
    }

    render() {
        return (
            <div className="recipeWrapper recipe-header">
                <div className="recipeHeader">
                    <div className="heading"> Recipe List </div>
                </div>
                <div className="recipeBody">
                {
                    this.state.recipes.map((recipe) => {
                        return (
                            <DisplayRecipe recipeContent={recipe.recipeContent} recipeId={recipe.id} key={recipe.id} removeRecipe={this.removeRecipe}/>
                        )
                    })
                }
                </div>
                <div className="recipesFooter">
                    <RecipeForm addRecipe={this.addRecipe} />
                </div>
            </div>  
        );
    }
}

export default Recipes;