import { userApi } from "@/redux";
import { Navigate } from "react-router-dom";

const DashboardToRole = () => {
  const { data, isLoading } = userApi.useUserInfoQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );

  const user = data?.data;

  if (!user?.email) return <Navigate to="/login" replace />;

  const rolePath = user.role?.toLowerCase() ?? "";

  return <Navigate to={`/dashboard/${rolePath || "user"}`} replace />;
};

export default DashboardToRole;
