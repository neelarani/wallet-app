import { userApi } from "@/redux";
import type { Role } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component: ComponentType, requiredRole?: Role) => {
  return function AuthWrapper() {
    const { data, isLoading } = userApi.useUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.email) return <Navigate to="/login" />;

    if (!isLoading && !data?.data.isVerified)
      return <Navigate to={`/verify?email=${data?.data.email}`} />;

    if (requiredRole && !isLoading && requiredRole !== data?.data?.role)
      return <Navigate to="/unauthorized" />;

    return <Component />;
  };
};

export default withAuth;
