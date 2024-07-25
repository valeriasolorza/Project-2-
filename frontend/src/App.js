import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Recipe from './Routes/Recipe';
import SignUp from './Routes/SignUp';
import SignIn from './Routes/SignIn';
import Favorites from './Routes/Favorites';
import PrivateRoute from './Routes/PrivateRoute';
import reportWebVitals from './reportWebVitals';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/recipe/:id" element={<PrivateRoute />}>
          <Route path="/recipe/:id" element={<Recipe />} />
        </Route>
        <Route path="/favorites" element={<PrivateRoute />}>
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function NoMatch() {
  return (
    <div>
      <p>404</p>
    </div>
  );
}

reportWebVitals();
export default App;


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
