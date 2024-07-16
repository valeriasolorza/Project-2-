import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strCategory}</p>
      <p>{recipe.strArea}</p>
    </div>
  );
};

export default Recipe;
