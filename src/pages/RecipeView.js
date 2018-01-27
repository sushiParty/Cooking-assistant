import React, { Component } from 'react';
import fire from '.././fire';
import food from '../static/img/despair.jpg'

class RecipeView extends Component {




  render() {
    return (
      <div className="RecipeView">
        <h2> Recipe Name </h2>
        <img src ={food} height="200px"/>
        
        <h5> Difficulty : difficulty </h5>
        <div className="ingredients-list">
         <h3> Ingredients </h3>
         <ul> . </ul>
         <ul>. </ul>
         <ul> .</ul>
         <ul>. </ul>
         <ul>. </ul>
        </div>

        <div className="steps-list">
          <h3> Steps </h3>
          <ul>. </ul>
          <ul> .</ul>
          <ul> .</ul>
          <ul> .</ul>
          <ul> .</ul>
        </div>

        <div class="ui animated fade button" tabindex="0">
          <div class="visible content"> Start Cooking Assistant </div>
          <div class="hidden content"> Lets Go </div>

        </div>

      </div>

    );
  }
}

export default RecipeView;
