import { userApi } from '@/redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading } = userApi.useUserInfoQuery();
  const user = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <section className="text-center py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Welcome to <span className="text-primary"> Wallet APP</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          The smart and secure way to manage your money. Send, receive, and
          track your finances effortlessly — anytime, anywhere.
        </p>
        <div className="flex justify-center gap-4">
          {!user && (
            <Link
              to="/register"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          )}
          <Link
            to="/about"
            className="rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3 mt-16">
        <div className="p-6 rounded-lg border bg-card shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-2">⚡ Instant Transfers</h2>
          <p className="text-muted-foreground">
            Move money in seconds with no hassle — fast, reliable, and
            convenient.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-2">🔒 Bank-Level Security</h2>
          <p className="text-muted-foreground">
            Your funds and personal data are safe with enterprise-grade
            encryption.
          </p>
        </div>
        <div className="p-6 rounded-lg border bg-card shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-2">📊 Smart Insights</h2>
          <p className="text-muted-foreground">
            Track spending, savings, and transactions with clear financial
            insights.
          </p>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-10">How Wallet APP Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-2">1. Sign Up</h3>
            <p className="text-muted-foreground">
              Create a free account in minutes with just your email or phone.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-2">2. Add Funds</h3>
            <p className="text-muted-foreground">
              Link your bank or card to deposit money safely and securely.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card shadow-sm">
            <h3 className="text-xl font-bold mb-2">3. Start Transacting</h3>
            <p className="text-muted-foreground">
              Send and receive money instantly — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {!user && (
        <section className="text-center mt-24">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to simplify your finances?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who trust Wallet APP to manage their money.
          </p>
          <Link
            to="/register"
            className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Create Your Account
          </Link>
        </section>
      )}
    </main>
  );
};

export default Home;
