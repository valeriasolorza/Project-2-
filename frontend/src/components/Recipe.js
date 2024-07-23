import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <img src={recipe.picture} alt={recipe.recipeName} width="300" height="300" />
      <Link to={`/recipe/${recipe.recipeId}`} target="_blank"><h2>{recipe.recipeName}</h2></Link>
    </div>
  );
};

export default Recipe;
