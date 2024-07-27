import useAuthStore from '../../stores/auth/AuthStore';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const { logout } = useAuthStore();

    useEffect(() => {
        logout();
    }, []);

    return <Navigate to="/login" replace />;
};

export default Logout;