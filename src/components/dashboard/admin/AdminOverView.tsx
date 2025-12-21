import { statsApi } from "@/redux";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useJoyride } from "@/hooks";

const AdminOverView = () => {
  const { data, isLoading, isError } = statsApi.useAdminOverViewQuery();
  useJoyride("admin_overview", isLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium">Loading overview...</p>
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium text-red-500">
          Failed to load overview.
        </p>
      </div>
    );
  }

  const { usersCount, txrnCount, txrnVolume } = data.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card id="stats-admin-total-users">
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{usersCount}</p>
        </CardContent>
      </Card>

      <Card id="stats-admin-transaction-count">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{txrnCount}</p>
        </CardContent>
      </Card>

      <Card id="stats-admin-transaction-volume">
        <CardHeader>
          <CardTitle>Transaction Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">৳{txrnVolume}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverView;
