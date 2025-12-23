import { userApi } from '@/redux';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { getErrorMessage } from '@/utils';

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
      toast.error(getErrorMessage(err) || 'Failed to request for agent');
    }
  };

  return (
    <div className="mt-24">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-center">
        Applications For Agent
      </h1>
      <p className="text-base md:text-lg text-gray-500 mb-4 text-center ">
        Review all submitted applications from users who want to become agents.
        Approve or reject applications based on the eligibility criteria.
      </p>

      <Card className="w-5/11 mx-auto mt-6">
        <CardHeader>
          <CardTitle>Request For Agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Logged in as:{' '}
            <span className="font-medium">
              {isUserLoading ? 'Loading...' : user?.data?.email ?? 'Unknown'}
            </span>
          </p>

          <Button
            onClick={handleRequest}
            disabled={isLoading || isUserLoading}
            className="w-full cursor-pointer font-bold"
          >
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestForAgent;
