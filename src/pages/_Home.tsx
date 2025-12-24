import Hero from '@/components/Home/Hero';
import OurServices from '@/components/Home/OurServices';
import Reviews from '@/components/Home/Reviews';
import Secure from '@/components/Home/Secure';

const Home = () => {
  return (
    <div className="px-8">
      <Hero />
      <OurServices />
      <Secure />
      <Reviews />
    </div>
  );
};

export default Home;
