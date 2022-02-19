
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Service from './services/service';

const AuthRoute = () => {
    const { isAuthenticate } = new Service();
    return isAuthenticate ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRoute;