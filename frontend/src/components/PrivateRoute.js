import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Helper function to get login state and role from localStorage
const getAuth = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');
    return { isLoggedIn, role };
};

const PrivateRoute = ({ roles, children }) => {
    const { pathname } = useLocation();
    const { isLoggedIn, role: userRole } = getAuth();

    if (isLoggedIn && roles.includes(userRole)) {
        return children;
    } else {
        // Redirect to login if not logged in
        return <Navigate to="/" state={{ from: pathname }} />;
    }
};

export default PrivateRoute;