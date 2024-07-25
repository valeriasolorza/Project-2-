import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.recipeId} className="recipe-card">
          <Recipe recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;