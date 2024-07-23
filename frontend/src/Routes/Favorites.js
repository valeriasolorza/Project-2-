import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import { getFavorites } from '../API/api';


const Favorites = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getRecipes = async () => {
            const data = await getFavorites();
            setRecipes(data || []);
            setIsLoading(false);
        };

        getRecipes();
    }, []);

  return (
    <div className="App">
      <h1>Favorite Recipes</h1>
      <button onClick={() => window.location.href = '/'}>Home</button>
      {isLoading ? <p>Loading...</p> : (recipes.length === 0 ? <p>You don't haev any favorited recipes.</p> : <RecipeList recipes={recipes} />)}
    </div>
  );
};

export default Favorites;
