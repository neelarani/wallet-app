import Hero from '@/components/Home/Hero';
import OurServices from '@/components/Home/OurServices';
import Secure from '@/components/Home/Secure';

const Home = () => {
  return (
    <div className="px-8">
      <Hero />
      <OurServices />
      <Secure />
    </div>
  );
};

export default Home;
