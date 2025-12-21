import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">🚧 Under Construction</h1>
      <p className="mt-4 text-muted-foreground">
        We’re building this feature for you. Please check back soon.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Go Back Home
        </Link>
        <Link
          to="/contact"
          className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
