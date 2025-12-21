import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { authApi, userApi } from "@/redux";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const VerifyUser = () => {
  const navigate = useNavigate();
  const email = useSearchParams()[0].get("email");
  const [getVerificationURl, { isLoading }] = authApi.useGetVerifyURLMutation();
  const user = userApi.useUserInfoQuery();

  const handleGetNewVerifyUrl = async () => {
    const { error } = await getVerificationURl({ email });

    return !error
      ? toast.success("Verification Email has been sended!")
      : toast.error("Failed to send verification email");
  };

  useEffect(() => {
    if (user.data?.data.isVerified) navigate(-1);
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Verify Your Account
          </CardTitle>
          <CardDescription>
            We’ve sent a verification link to your email address.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">
            Didn’t get the email? You can request a new verification link.
          </p>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button
            disabled={isLoading}
            onClick={handleGetNewVerifyUrl}
            size="lg"
            className="w-full"
          >
            Get New Verification Link
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyUser;
