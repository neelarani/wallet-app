import { useState } from "react";
import { adminApi } from "@/redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getErrorMessage, objectToSearchParams } from "@/utils";
import type { IsActive } from "@/types";
import { toast } from "sonner";

const ManageAgent = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [blockUnblock] = adminApi.useBlockAndUnblockUserMutation();

  const { data, isLoading, isError } = adminApi.useRetrieveAllUsersQuery(
    objectToSearchParams({
      role: "AGENT",
      page: page.toString(),
      limit: limit.toString(),
    })
  );

  if (isLoading) return <p className="text-center py-10">Loading users...</p>;

  if (isError || !data?.data)
    return (
      <p className="text-center py-10 text-red-500">Failed to load users.</p>
    );

  const totalPages = data?.meta?.totalPage || 1;

  const blockUnblockUser = async (isActive: IsActive, userId: string) => {
    try {
      const { message } = await blockUnblock({
        isActive: isActive,
        userId: userId,
      }).unwrap();
      toast.success(message);
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || "Something went wrong.");
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone || "-"}</TableCell>
              <TableCell>{user.isActive}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.isVerified ? "Yes" : "No"}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  variant={
                    user.isActive === "ACTIVE" ? "destructive" : "default"
                  }
                  onClick={() =>
                    blockUnblockUser(
                      user.isActive === "ACTIVE" ? "BLOCKED" : "ACTIVE",
                      user._id as string
                    )
                  }
                >
                  {user.isActive === "ACTIVE" ? "Block" : "Unblock"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-end mt-4 space-x-2">
        <Button
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <span className="flex items-center px-2">
          Page {page} of {totalPages}
        </span>
        <Button
          size="sm"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ManageAgent;
