import about from '../assets/images/about.png';

const About = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Image Full Width */}
      <section className="w-screen">
        <img
          src={about}
          alt="About Wallet APP"
          className="w-screen h-auto object-cover"
        />
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto my-24 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Wallet APP</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Wallet APP is your trusted digital wallet app that makes sending,
            receiving, and managing money simple and secure. Built with modern
            design and seamless user experience, it’s the perfect wallet for
            your everyday financial needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-lg border bg-card shadow-sm text-center hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">💸 Easy Transactions</h2>
            <p className="text-muted-foreground">
              Send and receive money instantly with just a few taps. No more
              long processes or waiting times.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card shadow-sm text-center hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">🔒 Secure & Reliable</h2>
            <p className="text-muted-foreground">
              Your money and data are protected with top-notch encryption and
              security standards.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card shadow-sm text-center hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">🌍 Global Access</h2>
            <p className="text-muted-foreground">
              Use Wallet APP anytime, anywhere — perfect for travelers, online
              payments, and cross-border transfers.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card shadow-sm text-center hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Smart Insights</h2>
            <p className="text-muted-foreground">
              Track your spending habits and manage your finances better with
              built-in analytics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
