import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { transactionApi } from "@/redux";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils";

const zTopUpMoneySchema = z.object({
  amount: z
    .number()
    .positive({ message: "Amount must be a positive number" })
    .refine((val) => Number(val) > 0, {
      message: "Amount must be a positive number",
    }),
});

type TopUpFormData = z.infer<typeof zTopUpMoneySchema>;

const DepositMoney = () => {
  const [depositMoney, { isLoading }] =
    transactionApi.useDepositMoneyMutation();

  const form = useForm<TopUpFormData>({
    resolver: zodResolver(zTopUpMoneySchema),
  });

  const onSubmit = async (data: TopUpFormData) => {
    try {
      const { message } = await depositMoney({ amount: data.amount }).unwrap();
      toast.success(message || "Money deposited successfully!");
      form.reset();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-primary-foreground rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Deposit Money</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    value={field.value || ""}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : "Deposit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DepositMoney;
