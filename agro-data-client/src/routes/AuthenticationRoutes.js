import React from 'react';

// project imports
import MinimalLayout from 'layout/MinimalLayout';
import Login from 'views/pages/authentication/authentication/Login';
import Register from 'views/pages/authentication/authentication/Register';

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
};

export default AuthenticationRoutes;
