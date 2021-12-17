import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';

const ProtectedRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading) {return <Spinner/>}
    return (
      user.email ? children : <Navigate to="/login" />
    );
};

export default ProtectedRoute;