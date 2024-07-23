import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
