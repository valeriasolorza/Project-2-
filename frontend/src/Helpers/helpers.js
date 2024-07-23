import Cookies from 'js-cookie';
import { useState } from 'react';

export const getAccessToken = () => Cookies.get('access_token');
export const getUserId = () => Cookies.get('user_id');
export const getRefreshToken = () => Cookies.get('refresh_token');
export const isAuthenticated = () => !!getAccessToken() || !!getUserId();

export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return {
      value,
      onChange: handleChange
    };
}
