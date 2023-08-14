import React from 'react';

import { Navigate } from 'react-router-dom';

import { useUser } from '../../contexts/User';

const BASE_URL = '/';

interface IProps {
  children: React.ReactNode;
}
const GuestGuard = ({ children }: IProps) => {
  const { isAuthenticated } = useUser();

  // if (isAuthenticated) {
  //   return <Navigate to={BASE_URL} />;
  // }

  return <>{children}</>;
};

export default GuestGuard;
