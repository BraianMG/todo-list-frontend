import React from 'react';
import { Navigate } from 'react-router-dom';
import handleSession from '../helpers/session'

const PrivateRoute = ({children}) => {

    const { auth } = handleSession();

    return (
        auth ? children : <Navigate to="/" />
    );
};

export default PrivateRoute;