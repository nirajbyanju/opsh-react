import React from 'react';
import { WithChildrenProps } from '../../types/auth/generalTypes';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../stores/auth/AuthStore';

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default RequireAuth;
