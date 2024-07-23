import React from 'react';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipeDetails">
        <img src={recipe.picture} alt={recipe.recipeName} width="300" height="300" />
        <h2>{recipe.recipeName}</h2>
        <FavoriteButton recipe={recipe} isFavorite={recipe.isFavorite} />
        <h3>Ingredients</h3>
        <ul>
            { recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient} - {recipe.measurements[index]}</li>
            ))}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
