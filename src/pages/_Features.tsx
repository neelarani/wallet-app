import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { features } from '@/constants';
import { Helmet } from 'react-helmet-async';

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Features | Wallet APP</title>
        <meta
          name="description"
          content="Learn more about Wallet APP, your trusted digital wallet for easy, secure, and smart money management."
        />
      </Helmet>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose <span className="text-primary">Wallet APP</span>?
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            A simple, secure, and powerful way to manage your money.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg transition rounded-2xl"
              >
                <CardHeader className="flex flex-col items-center text-center space-y-2">
                  {feature.icon}
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
