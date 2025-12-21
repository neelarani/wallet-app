import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
        404
      </h1>
      <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
        Oops! Page not found.
      </p>
      <p className="mt-2 text-center text-sm text-muted-foreground sm:text-base max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
