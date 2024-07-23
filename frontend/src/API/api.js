import Cookies from 'js-cookie';
import { getRefreshToken } from '../Helpers/helpers';

export const authenticate = async () => {
  if (getRefreshToken()) {
    try {
      const tokens = await refreshTokens(); // call an API, returns tokens
      if(tokens.success) {
        setTokens(tokens);
        return true;
      }
      return false;
    } catch (error) {
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      Cookies.remove('user_id');

      return false;
    }
  }

  return false;
}

const setTokens = (tokens_data) => {
  const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
  const expires = new Date(tokens_data.access_expiration) || inOneHour;

  Cookies.set('access_token', tokens_data.access_token, { expires: expires });
  Cookies.set('user_id', tokens_data.userId, { expires: expires });

  if(tokens_data.refresh_token) {
    const inTwoDays = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
    const refreshExpires = new Date(tokens_data.refresh_expiration) || inTwoDays;

    Cookies.set('refresh_token', tokens_data.refresh_token, { expires: refreshExpires });
  }
}

const refreshTokens = async () => {
  const response = await fetch('http://localhost:3000/users/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token: getRefreshToken() }),
  });
  const data = await response.json();
  return data;
}

export const fetchRecipes = async (searchTerm = '') => {
  const response = await fetch(`http://localhost:3000/recipes/search-recipes?s=${searchTerm}`);
  const data = await response.json();
  return data;
};


export const randomMeal = async () => {
  const response = await fetch('http://localhost:3000/recipes/random-recipe');
  const data = await response.json();
  return data;
};

export const fetchRecipe = async (id) => {
  const response = await fetch(`http://localhost:3000/recipes/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
  });
  const data = await response.json();
  return data;
};

export const sendSignUp = async (username, email, password) => {
  const response = await fetch('http://localhost:3000/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, email: email, password: password }),
  });
  const data = await response.json();
  if (data.success) {
    setTokens(data);
  }
  return data;
};

export const sendSignIn = async (username, password) => {
  const response = await fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, password: password }),
  });
  const data = await response.json();
  if (data.success) {
    setTokens(data);
  }
  return data;
};

export const signOut = async () => {
  const response = await fetch('http://localhost:3000/users/signout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Cookies.get('access_token')}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if(data.success) {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    Cookies.remove('user_id');
  }
  return data;
};

export const favorite = async (recipeId) => {
  const response = await fetch('http://localhost:3000/users/favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
    body: JSON.stringify({ recipeId: recipeId }),
  });
  const data = await response.json();
  return data;
};

export const getFavorites = async () => {
  const response = await fetch('http://localhost:3000/users/favorites', {
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
  });
  const data = await response.json();
  return data;
};



// useEffect(() => {
//   const fetchRecipes = async () => {
//     const recipe = await fetch('http://localhost:3000/recipes')
//     setRecipe(recipe)
//   }
// })
