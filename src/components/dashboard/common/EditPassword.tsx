import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import { userApi } from '@/redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useId, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { getErrorMessage } from '@/utils';

const zUpdatePasswordSchema = z
  .object({
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        {
          message:
            'Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        }
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const EditPassword = () => {
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const [editPassword, { isLoading }] = userApi.useUpdatePasswordMutation();

  const form = useForm<z.infer<typeof zUpdatePasswordSchema>>({
    resolver: zodResolver(zUpdatePasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof zUpdatePasswordSchema>) => {
    try {
      const { message } = await editPassword({
        password: values.password,
      }).unwrap();
      toast.success(message || 'Your password has been successfully updated!');
      form.reset();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <section className="mt-24">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-center">
        Edit Your Password
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-4 text-center">
        Change your account password to keep your wallet secure. Make sure to
        choose a strong password before saving changes.
      </p>

      <div className="md:w-8/12 mx-auto p-6">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Edit Password</CardTitle>
            <CardDescription>
              Choose a strong password to keep your account secure.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            id={`${id}-password`}
                            className="pe-9"
                            placeholder="Password"
                            autoComplete="off"
                            type={isVisible ? 'text' : 'password'}
                            {...field}
                          />
                          <button
                            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground rounded-e-md focus-visible:ring-[3px] transition"
                            type="button"
                            onClick={() => setIsVisible(prev => !prev)}
                            aria-label={
                              isVisible ? 'Hide password' : 'Show password'
                            }
                          >
                            {isVisible ? (
                              <EyeOffIcon size={16} />
                            ) : (
                              <EyeIcon size={16} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            id={`${id}-confirm`}
                            className="pe-9"
                            placeholder="Confirm Password"
                            autoComplete="off"
                            type={isConfirmVisible ? 'text' : 'password'}
                            {...field}
                          />
                          <button
                            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 hover:text-foreground rounded-e-md focus-visible:ring-[3px] transition"
                            type="button"
                            onClick={() => setIsConfirmVisible(prev => !prev)}
                            aria-label={
                              isConfirmVisible
                                ? 'Hide confirm password'
                                : 'Show confirm password'
                            }
                          >
                            {isConfirmVisible ? (
                              <EyeOffIcon size={16} />
                            ) : (
                              <EyeIcon size={16} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <CardFooter className="flex justify-end px-0">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="font-bold cursor-pointer"
                  >
                    {isLoading ? 'Saving...' : 'Update Password'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EditPassword;
