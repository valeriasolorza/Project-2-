import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/Home';
import Recipe from './Routes/Recipe';
import SignUp from './Routes/SignUp';
import SignIn from './Routes/SignIn';
import Favorites from './Routes/Favorites';
import PrivateRoute from './Routes/PrivateRoute';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
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

function NoMatch() {
  return (
    <div>
      <p>
        404
      </p>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
