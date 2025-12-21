import { useState } from "react";
import { transactionApi } from "@/redux";
import { objectToSearchParams } from "@/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TransactionType } from "@/types";

const TransactionHistory = () => {
  const [page, setPage] = useState(1);
  const [tranType, setTranType] = useState<TransactionType | "ALL">("ALL");

  const { data, isLoading, isFetching } =
    transactionApi.useTransactionHIstoryQuery(
      objectToSearchParams({
        page: page.toString(),
        limit: "10",
        transactionType: tranType === "ALL" ? undefined : tranType,
      })
    );

  const history = data?.data ?? [];
  const meta = data?.meta;
  const isLoadingState = isLoading || isFetching;

  return (
    <Card className="max-w-5xl w-full mx-auto">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <CardTitle>Transaction History</CardTitle>

        <ToggleGroup
          type="single"
          value={tranType}
          onValueChange={(val) => {
            if (val) {
              setTranType(val as TransactionType);
              setPage(1);
            }
          }}
          className="flex flex-wrap gap-2 sm:gap-4 justify-center bg-muted/40"
        >
          <ToggleGroupItem
            value={"ALL"}
            className="flex-1 min-w-[80px] px-3 py-1"
          >
            ALL
          </ToggleGroupItem>
          {Object.values(TransactionType).map((item) => (
            <ToggleGroupItem
              key={item}
              value={item}
              className="flex-1 min-w-[100px] px-3 py-1"
            >
              {item}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardHeader>

      <CardContent>
        {isLoadingState ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : history.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-muted-foreground">No transactions found</p>
          </div>
        ) : (
          <>
            <div className="hidden sm:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[160px]">Date</TableHead>
                    <TableHead className="min-w-[120px]">Type</TableHead>
                    <TableHead className="min-w-[160px]">Sender</TableHead>
                    <TableHead className="min-w-[160px]">Receiver</TableHead>
                    <TableHead className="min-w-[100px] text-right">
                      Amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((txn) => (
                    <TableRow key={txn._id}>
                      <TableCell>
                        {new Date(txn.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>{txn.transactionType}</TableCell>
                      <TableCell>{txn.sender?.name}</TableCell>
                      <TableCell>{txn.receiver?.name || "-"}</TableCell>
                      <TableCell className="text-right font-medium">
                        ৳ {txn.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="space-y-4 sm:hidden">
              {history.map((txn) => (
                <div
                  key={txn._id}
                  className="border rounded-lg p-4 shadow-sm bg-background"
                >
                  <p className="text-sm text-muted-foreground">
                    {new Date(txn.createdAt).toLocaleString()}
                  </p>
                  <p className="font-medium">{txn.transactionType}</p>
                  <p className="text-sm">Sender: {txn.sender?.name}</p>
                  <p className="text-sm">
                    Receiver: {txn.receiver?.name || "-"}
                  </p>
                  <p className="font-semibold text-primary mt-2">
                    ৳ {txn.amount}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button
                variant="outline"
                size="sm"
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Previous
              </Button>
              <p className="text-sm text-muted-foreground">
                Page {meta?.page} of {meta?.totalPage}
              </p>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= meta!.totalPage}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
