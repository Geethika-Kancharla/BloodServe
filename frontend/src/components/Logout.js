import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        console.log(localStorage.getItem('isLoggedIn'));
        navigate('/');
    }, [navigate]);

    return null;
};

export default Logout;