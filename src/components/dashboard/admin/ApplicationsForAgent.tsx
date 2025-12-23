import { useState } from 'react';
import { adminApi } from '@/redux';
import { getErrorMessage, objectToSearchParams } from '@/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { IToAgentStatus } from '@/types';
import { Loader2 } from 'lucide-react';

const ApplicationsForAgent = () => {
  const [page, setPage] = useState(1);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const limit = 10;

  const { data, isLoading, refetch } =
    adminApi.useRetrieveAllAgentApplicationQuery(
      objectToSearchParams({ page: page.toString(), limit: limit.toString() })
    );

  const [updateToAgentStatus] = adminApi.useUpdateToAgentStatusMutation();

  if (isLoading) {
    return <div className="text-center my-3">Loading...</div>;
  }

  const applications = data?.data ?? [];
  const meta = data?.meta;

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (meta && page < meta.totalPage) setPage(prev => prev + 1);
  };

  const handleUpdateStatus = async (
    requestAgentId: string,
    status: IToAgentStatus
  ) => {
    try {
      setLoadingId(requestAgentId);
      await updateToAgentStatus({ requestAgentId, status }).unwrap();
      toast.success(`Application ${status.toLowerCase()} successfully`);
      refetch();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || 'Something went wrong');
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Applications For Agent</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead> </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map(app => {
            const isPending = app.status === IToAgentStatus.PENDING;
            const isRowLoading = loadingId === app._id;

            return (
              <TableRow key={app._id}>
                <TableCell>{app.user?.name}</TableCell>
                <TableCell>{app.user?.email}</TableCell>
                <TableCell>{app.user?.phone ?? 'N/A'}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      app.status === IToAgentStatus.PENDING
                        ? 'bg-yellow-100 text-yellow-800'
                        : app.status === IToAgentStatus.SUSPENDED
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {app.status}
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(app.user?.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-center">
                  {isRowLoading && (
                    <Loader2 className="h-5 w-5 animate-spin text-blue-600 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    size="sm"
                    variant="default"
                    disabled={!isPending || isRowLoading}
                    onClick={() =>
                      handleUpdateStatus(app._id, IToAgentStatus.APPROVED)
                    }
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={!isPending || isRowLoading}
                    onClick={() =>
                      handleUpdateStatus(app._id, IToAgentStatus.SUSPENDED)
                    }
                  >
                    Suspend
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {meta && (
        <div className="flex items-center justify-between mt-4">
          <Button onClick={handlePrev} disabled={page === 1}>
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {meta.page} of {meta.totalPage} (Total: {meta.total})
          </span>
          <Button onClick={handleNext} disabled={page === meta.totalPage}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApplicationsForAgent;
