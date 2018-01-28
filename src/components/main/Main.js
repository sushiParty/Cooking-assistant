import React, { Component } from 'react';
import { fire, storage } from '../../fire.js';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './home/Home.js';
import MyRecipes from './my-recipes/MyRecipes.js';
import NewRecipe from './new-recipe/NewRecipe.js';
import SavedRecipes from './saved-recipes/SavedRecipes.js';

class Main extends Component {
  render() {
    return (
      <Switch>
	<Route path='/home' component={ Home }/>
	<Route path='/my-recipes' component={ MyRecipes }/>
	<Route path='/new-recipe' component={ NewRecipe }/>
	<Route path='/saved-recipes' component={ SavedRecipes }/>
      </Switch>
    );
  }
}

export default Main;
