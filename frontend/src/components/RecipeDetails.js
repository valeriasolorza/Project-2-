import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import './RecipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="recipe-details-container">
      <div className="button-container">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <FavoriteButton recipe={recipe} isFavorite={recipe.isFavorite} className="favorite-button" />
      </div>
      <div className="recipe-details">
        <img src={recipe.picture} alt={recipe.recipeName} className="recipe-image" />
        <h2 className="recipe-title">{recipe.recipeName}</h2>
        <div className="recipe-content">
          <div className="ingredients-section">
            <h3 className="section-title">Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">{ingredient} - {recipe.measurements[index]}</li>
              ))}
            </ul>
          </div>
          <div className="instructions-section">
            <h3 className="section-title">Instructions</h3>
            <p className="instructions-text">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
