// import './App.css';
// import TopBar from './components/topbar';
// import Background from './components/background';
// import RecipeList from './components/RecipeList';
// import { fetchRecipes } from './API/api';

// function App() {
//   return (
//     <div className="App">
//       <TopBar/>
//       <Background />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './API/api';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes(searchTerm);
      setRecipes(data.meals || []);
    };

    getRecipes();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
