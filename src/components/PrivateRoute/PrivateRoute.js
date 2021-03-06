import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ authorized, ...props }) =>{
    return (
        authorized ? <Route {...props} /> : <Redirect to="/register" />
    )
};

export default PrivateRoute;