import { userApi } from '@/redux';
import type { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

const withPreventAccessInAuth = (Component: ComponentType) => {
  return function AuthWrapper() {
    const { data, isLoading } = userApi.useUserInfoQuery();

    return !isLoading && data?.data?.email ? (
      <Navigate to="/" />
    ) : (
      <Component />
    );
  };
};

export default withPreventAccessInAuth;
