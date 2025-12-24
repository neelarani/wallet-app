import Hero from '@/components/Home/Hero';
import OurServices from '@/components/Home/OurServices';
import Reviews from '@/components/Home/Reviews';
import Secure from '@/components/Home/Secure';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Wallet APP</title>
        <meta
          name="description"
          content="Wallet APP - Manage your money smartly"
        />
      </Helmet>
      <div className="px-8">
        <Hero />
        <OurServices />
        <Secure />
        <Reviews />
      </div>
    </>
  );
};

export default Home;
