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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { userApi } from "@/redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils";

const UpdateProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .refine((val) => val.trim() !== "", {
      message: "Name is required",
    })
    .optional(),

  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .refine((val) => val.trim() !== "", {
      message: "Phone is required",
    }),
});

const UpdateProfile = () => {
  const { data, isLoading: userLoading, refetch } = userApi.useUserInfoQuery();
  const [editProfile, { isLoading: editLoading }] =
    userApi.useEditProfileMutation();

  const form = useForm<z.infer<typeof UpdateProfileSchema>>({
    resolver: zodResolver(UpdateProfileSchema),
    defaultValues: {
      name: data?.data?.name ?? "",
      phone: data?.data?.phone ?? "",
    },
    values: {
      name: data?.data?.name ?? "",
      phone: data?.data?.phone ?? "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UpdateProfileSchema>) => {
    try {
      await editProfile(values).unwrap();
      toast.success("Your profile has been successfully updated.");
      refetch();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
          <CardDescription>
            Only your <span className="font-medium">name</span> and{" "}
            <span className="font-medium">phone</span> can be updated.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
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
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="01234567891" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="flex justify-end px-0">
                <Button type="submit" disabled={userLoading || editLoading}>
                  {editLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProfile;
