import { statsApi } from '@/redux';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useJoyride } from '@/hooks';

const UserOverview = () => {
  const { data, isLoading, isError } = statsApi.useUserOverViewQuery(void 0);
  useJoyride('user_overview', isLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center h-40 flex items-center justify-center">
        Failed to load overview
      </div>
    );
  }

  const stats = data?.data || { total: 0, volume: 0, balance: 0 };

  return (
    <section className="mt-24">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-center">
        Account Overview
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-4 text-center">
        Get a quick summary of your wallet, recent transactions, and account
        activity. Stay updated on your balance and important notifications.
      </p>

      <div className="grid gap-4 sm:grid-cols-3 md:w-8/11 mx-auto mt-16">
        <Card
          className="shadow-sm rounded-2xl"
          id="stats-user-total-transaction"
        >
          <CardHeader>
            <CardTitle className="text-lg">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats?.total || 0}</p>
          </CardContent>
        </Card>

        <Card
          className="shadow-sm rounded-2xl"
          id="stats-user-transaction-volume"
        >
          <CardHeader>
            <CardTitle className="text-lg">Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${stats.volume || 0}</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-2xl" id="stats-user-balance">
          <CardHeader>
            <CardTitle className="text-lg">Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              ${stats.balance}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserOverview;
