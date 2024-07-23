import React, { useMemo, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../Helpers/helpers';
import { authenticate } from '../API/api';


const PrivateRoute = () => {
    var [isLoading, setIsLoading] = useState(true);
    var [auth, setAuth] = useState(false);

    useMemo(() => {
        if(isAuthenticated()) {
            setAuth(true);
            setIsLoading(false);
        } else {
            const checkAuth = async () => {
                const isAuthenticated = await authenticate(true);
                setAuth(isAuthenticated);
                setIsLoading(false);
            }
            checkAuth();
        }
    }, []);

    return isLoading ? '' : (auth ? <Outlet /> : <Navigate to="/signin" />);
}

export default PrivateRoute;