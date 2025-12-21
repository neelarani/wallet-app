import { userApi } from "@/redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils";

const RequestForAgent = () => {
  const { data: user, isLoading: isUserLoading } = userApi.useUserInfoQuery();
  const [requestForAgent, { isLoading }] = userApi.useRequestForAgentMutation();

  const handleRequest = async () => {
    try {
      await requestForAgent().unwrap();
      toast.success(
        `Agent request submitted successfully. A confirmation email has been sent to ${user?.data?.email}`
      );
    } catch (err: unknown) {
      toast.error(getErrorMessage(err) || "Failed to request for agent");
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Request For Agent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          Logged in as:{" "}
          <span className="font-medium">
            {isUserLoading ? "Loading..." : user?.data?.email ?? "Unknown"}
          </span>
        </p>

        <Button
          onClick={handleRequest}
          disabled={isLoading || isUserLoading}
          className="w-full"
        >
          {isLoading ? "Submitting..." : "Submit Request"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RequestForAgent;
