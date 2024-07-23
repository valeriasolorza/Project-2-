import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';
import { fetchRecipe } from '../API/api';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({'message': 'Loading...'});
    const [item, setItem] = useState(<p>{recipe.message}</p>);

    useEffect(() => {
        const getRecipe = async () => {
            const data = await fetchRecipe(id);
            setRecipe(data);
            if (!data.message) {
                setItem(<RecipeDetails recipe={data} />);
            } else {
                setItem(<p>{data.message}</p>);
            }
        };

        getRecipe();
    }, [id]);

    return (
        <div className="Recipe">
        <h1>Recipe App</h1>
        {item}
        </div>
    );
};

export default Recipe;
