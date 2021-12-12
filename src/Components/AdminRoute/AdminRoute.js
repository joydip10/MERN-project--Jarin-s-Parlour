import React from 'react';
import UseAuth from './../Hooks/UseAuth';
import { useLocation, Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = UseAuth();
    let location = useLocation();
    if (isLoading===true) { return <CircularProgress /> }
    else {
        if (user.email && admin) {
            return children;
        }
        return <Navigate to="/login" state={{ from: location }} />;
    }

};

export default PrivateRoute;