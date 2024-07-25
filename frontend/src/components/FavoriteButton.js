import React, { useState } from 'react';
import { favorite } from '../API/api';
import './FavoriteButton.css';

const FavoriteButton = ({ recipe, isFavorite }) => {
    const [isFav, setIsFavorite] = useState(isFavorite);

    const addRemoveFavorite = async () => {
        const setFavorite = await favorite(recipe.recipeId);
        if (setFavorite.success) {
            setIsFavorite(!isFav);
        }
        alert(setFavorite.message);
    }

    return (
        <div className="favoriteButton">
        <button onClick={addRemoveFavorite}>{ isFav ? "Unfavorite" : "Favorite" }</button>
        </div>
    );
};

export default FavoriteButton;
