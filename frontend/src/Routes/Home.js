import React, { useEffect, useState, useMemo, useRef } from 'react';
import RecipeList from '../components/RecipeList';
import { fetchRecipes, randomMeal, authenticate, signOut } from '../API/api';
import { isAuthenticated } from '../Helpers/helpers';
import './Home.css';
import logo from '../Images/vdno-1.png';

const Home = () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [auth, setAuth] = useState(null);
  const currentSearch = useRef('');

  useEffect(() => {
    if (currentSearch.current === searchTerm) {
      return;
    }
    currentSearch.current = searchTerm;
    const getRecipes = async () => {
      if (searchTerm === '') {
        setRecipes([]);
        return;
      }
      if (recipes === null) {
        setRecipes([]);
      }
      await delay(1000);
      if (currentSearch.current !== searchTerm) {
        return;
      }
      const data = await fetchRecipes(searchTerm);
      if (data.length === 0) {
        setRecipes(null);
        return;
      }
      setRecipes(data || []);
    };

    getRecipes();
  }, [searchTerm, recipes]);

  const handleSignOut = async () => {
    const data = await signOut();
    if (data.success) {
      window.location.href = '/';
    }
  };

  useMemo(() => {
    if (isAuthenticated()) {
      const authView = (
        <div className="signed-in-buttons">
          <button onClick={() => window.location.href = '/favorites'}>Favorites</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      );
      setAuth(authView);
    } else {
      const checkAuth = async () => {
        const isAuthenticated = await authenticate(true);
        if (isAuthenticated) {
          const authView = (
            <div className='signed-in-buttons'>
              <button onClick={() => window.location.href = '/favorites'}>Favorites</button>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          );
          setAuth(authView);
        } else {
          const authView = (
            <div className='inup-buttons'>
              <button onClick={() => window.location.href = '/signin'}>Sign In</button>
              <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
            </div>
          );
          setAuth(authView);
        }
      };
      checkAuth();
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getRandomMeal = async () => {
    const data = await randomMeal();
    setRecipes([data] || []);
  };

  return (
    <div className="App">
      <img className='logo' src={logo} alt='logo' /> 
      <h3 className='intro-welcome'> Welcome to Vibrant Dishes, Nourishing Options! 🍴✨ Discover a world of colorful and healthy recipes that cater to all tastes and preferences. For the full experience, sign up for free and become a member. Save your favorite recipes, access ingredient details, and enjoy personalized features tailored just for you. Join us today and start your culinary adventure!</h3>
      <div className='search-container'>
        <input
          className="search-input"
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className='random-recipe-button' onClick={getRandomMeal}>Random Recipe</button>
      </div>
      {auth}
      {recipes === null ? <p>No recipes found.</p> : <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;