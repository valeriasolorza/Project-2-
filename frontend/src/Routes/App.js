import React, { useEffect, useState, useMemo, useRef } from 'react';
import RecipeList from '../components/RecipeList';
import { fetchRecipes, randomMeal, authenticate, signOut } from '../API/api';
import { isAuthenticated } from '../Helpers/helpers';


const App = () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [auth, setAuth] = useState();
  const currentSearch = useRef('');

  useEffect(() => {
    if(currentSearch.current === searchTerm) {
      return;
    }
    currentSearch.current = searchTerm;
    const getRecipes = async () => {
      if (searchTerm === '') {
        setRecipes([]);
        return;
      }
      if(recipes === null) {
        setRecipes([]);
      }
      await delay(1000);
      if (currentSearch.current !== searchTerm) {
        return;
      }
      const data = await fetchRecipes(searchTerm);
      if(data.length === 0) {
        setRecipes(null);
        return;
      }
      setRecipes(data || []);
    };

    getRecipes();
  }, [searchTerm, recipes]);

  const handleSignOut = async () => {
    const data = await signOut();
    if(data.success) {
      window.location.href = '/';
    }
  }

  useMemo(() => {
    if(isAuthenticated()) {
        const authView = <div>
          <button onClick={() => window.location.href = '/favorites'}>Favorites</button> 
          <button onClick={handleSignOut}>Sign Out</button>
          </div>;
        setAuth(authView);
    } else {
        const checkAuth = async () => {
            const isAuthenticated = await authenticate(true);
            if(isAuthenticated) {
              const authView = <div>
                <button onClick={() => window.location.href = '/favorites'}>Favorites</button> 
                <button onClick={handleSignOut}>Sign Out</button>
                </div>;
              setAuth(authView);
            } else {
              const authView = <div>
                <button onClick={() => window.location.href = '/signin'}>Sign In</button>
                <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
                </div>;
              setAuth(authView);
            }
        }
        checkAuth();
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getRandomMeal = async () => {
    const data = await randomMeal();
    setRecipes([data] || []);
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <button onClick={() => getRandomMeal()}>Random Recipe</button>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {auth}
      { recipes === null ? <p>No recipes found.</p> : <RecipeList recipes={recipes} /> }
    </div>
  );

};

export default App;
