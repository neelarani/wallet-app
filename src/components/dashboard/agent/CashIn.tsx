import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { transactionApi } from '@/redux';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { getErrorMessage } from '@/utils';

const zCashInSchema = z.object({
  receiverPhone: z
    .string()
    .regex(
      /^01[0-9]{9}$/,
      'Invalid phone number (must start with 01 and be 11 digits)'
    ),
  amount: z
    .number()
    .refine(val => val !== 0, {
      message: 'Amount must be a positive integer',
    })
    .min(1, 'Amount must be at least 1'),
});

type CashInFormValues = z.infer<typeof zCashInSchema>;

const CashIn = () => {
  const [cashIn, { isLoading }] = transactionApi.useCashInMutation();

  const form = useForm<CashInFormValues>({
    resolver: zodResolver(zCashInSchema),
    defaultValues: {
      receiverPhone: '',
      amount: 0,
    },
  });

  const onSubmit = async (values: CashInFormValues) => {
    try {
      const res = await cashIn(values).unwrap();
      toast.success(res.message || 'Cash in successful');
      form.reset();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) || 'Failed to cash in');
    }
  };

  return (
    <div className="my-24">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-center">
        Add Money to Your Wallet
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-4 text-center">
        Instantly top up your wallet balance and enjoy seamless transactions.
      </p>

      <Card className="md:w-6/11 mx-auto">
        <CardHeader>
          <CardTitle>Cash In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Receiver Phone */}
              <FormField
                control={form.control}
                name="receiverPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter receiver phone (e.g. 01XXXXXXXXX)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={field.value || ''}
                        onChange={e =>
                          field.onChange(
                            e.target.value ? Number(e.target.value) : ''
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Cash In'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashIn;
