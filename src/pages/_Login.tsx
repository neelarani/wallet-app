import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useId, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { authApi } from '@/redux';
import { toast } from 'sonner';
import { ENV } from '@/config';
import { getErrorMessage } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      {
        message:
          'Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character',
      }
    ),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);
  const login = authApi.useLoginMutation()[0];
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (inputData: LoginSchema) => {
    try {
      const res = await login(inputData).unwrap();

      console.log(res);

      toast.success('Login Successful!', {
        richColors: true,
        closeButton: true,
      });
      navigate('/');
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardContent className="p-8">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground">
            Login to your account 🔐
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We’ll never share your email with anyone else.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id={id}
                          className="pe-9"
                          placeholder="Password"
                          autoComplete="off"
                          type={isVisible ? 'text' : 'password'}
                          {...field}
                        />
                        <button
                          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground hover:text-foreground transition"
                          type="button"
                          onClick={() => setIsVisible(prev => !prev)}
                          aria-label={
                            isVisible ? 'Hide password' : 'Show password'
                          }
                          aria-pressed={isVisible}
                          aria-controls="password"
                        >
                          {isVisible ? (
                            <EyeOffIcon size={16} aria-hidden="true" />
                          ) : (
                            <EyeIcon size={16} aria-hidden="true" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  window.location.assign(`${ENV.BASE_URL}/auth/google`);
                }}
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google logo"
                  className="h-5 w-5"
                />
                Sign in with Google
              </Button>
            </form>
          </Form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <Link
              to="/register"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
