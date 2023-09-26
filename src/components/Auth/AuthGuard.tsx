import React from 'react';

import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/User';

interface IProps {
  children: React.ReactElement;
}
const AuthGuard = ({ children }: IProps) => {
  const { isAuthenticated } = useUser();

  // if (!isAuthenticated) {
  //   return <Navigate to="/auth/login" />;
  // }

  return <>{children}</>;
};

export default AuthGuard;
