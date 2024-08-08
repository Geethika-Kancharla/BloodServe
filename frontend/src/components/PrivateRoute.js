import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Helper function to get the token and role from localStorage
const getAuth = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return { token, role };
};

const PrivateRoute = ({ element: Element, role, ...rest }) => {
    const { pathname } = useLocation();
    const { token, role: userRole } = getAuth();

    if (token && userRole === role) {
        return <Element {...rest} />;
    } else {
        // Redirect to login or any other page
        return <Navigate to="/" state={{ from: pathname }} />;
    }
};

export default PrivateRoute;
