import { statsApi } from '@/redux';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useJoyride } from '@/hooks';

const AdminOverView = () => {
  const { data, isLoading, isError } = statsApi.useAdminOverViewQuery();
  useJoyride('admin_overview', isLoading);

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
    <div className="my-24">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 ">
        Admin Dashboard
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-4 ">
        Manage users, track transactions, and oversee all wallet activities
        efficiently from one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
    </div>
  );
};

export default AdminOverView;
