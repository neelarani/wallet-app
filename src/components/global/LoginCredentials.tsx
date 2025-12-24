import { Button } from '../ui/button';

const LoginCredentials = ({
  setCredentials,
}: {
  setCredentials: (data: { email: string; password: string }) => void;
}) => {
  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      <Button
        className="bg-primary cursor-pointer"
        type="button"
        variant={'outline'}
        onClick={() =>
          setCredentials({
            email: 'neelarany@gmail.com',
            password: '123456Aa@',
          })
        }
      >
        User Login
      </Button>
      <Button
        className="bg-primary cursor-pointer"
        type="button"
        variant={'outline'}
        onClick={() =>
          setCredentials({
            email: 'neela9624@gmail.com',
            password: '123456Aa@',
          })
        }
      >
        Agent Login
      </Button>
      <Button
        className="bg-primary cursor-pointer"
        type="button"
        variant={'outline'}
        onClick={() =>
          setCredentials({
            email: 'neelarani@gmail.com',
            password: '123456Aa@$',
          })
        }
      >
        Admin Login
      </Button>
    </div>
  );
};

export default LoginCredentials;
