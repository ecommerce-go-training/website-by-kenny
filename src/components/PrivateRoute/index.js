import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem('isLogin');
  return isLogin ? children : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
