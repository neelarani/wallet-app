import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { userApi } from "@/redux";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Role } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CreateUserSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .refine((val) => val.trim() !== "", { message: "Name is required" }),
  email: z
    .string()
    .email("Invalid email format")
    .refine((val) => val.trim() !== "", { message: "Email is required" }),
  role: z
    .enum([Role.USER, Role.AGENT])
    .refine((val) => !Object.values(val).includes(val), {
      message: `Provided role must in ${Role.USER} or ${Role.AGENT}`,
    })
    .optional(),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .refine((val) => val.trim() !== "", { message: "Phone is required" }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      {
        message:
          "Password must be at least 8 characters and include 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      }
    ),
});

type RegisterSchema = z.infer<typeof CreateUserSchema>;

const Register = () => {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);
  const registerUser = userApi.useRegisterMutation()[0];

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: { name: "", email: "", phone: "", password: "" },
  });

  const onSubmit = async (inputData: RegisterSchema) => {
    try {
      const { message } = await registerUser(inputData).unwrap();
      toast.success(message || "Registration successful!");
    } catch (error: unknown) {
      toast.error(getErrorMessage(error) || "Registration failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
      <Card className="w-full max-w-md shadow-lg border rounded-2xl">
        <CardContent className="p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
            Create an Account ✨
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="0123456789" {...field} />
                    </FormControl>
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
                          type={isVisible ? "text" : "password"}
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground hover:text-foreground transition"
                          onClick={() => setIsVisible((prev) => !prev)}
                          aria-label={
                            isVisible ? "Hide password" : "Show password"
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
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USER">USER</SelectItem>
                        <SelectItem value="AGENT">AGENT</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
