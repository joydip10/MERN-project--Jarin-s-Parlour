import React from 'react';
import UseAuth from './../Hooks/UseAuth';
import { useLocation,Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = UseAuth();
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;