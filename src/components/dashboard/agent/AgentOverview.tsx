import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { statsApi } from "@/redux";

const AgentOverview = () => {
  const { data, isLoading, isError } = statsApi.useAgentOverViewQuery();

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
    <div className="grid gap-4 sm:grid-cols-3">
      <Card className="shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Total Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.total}</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${stats.volume}</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-600">${stats.balance}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentOverview;
