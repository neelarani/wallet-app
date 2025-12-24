import Marquee from 'react-fast-marquee';

const reviews = [
  {
    img: 'https://i.ibb.co.com/RT7sWvTr/me-removebg-preview-removebg-preview.png',
    name: 'Neela Rani',
    role: 'Full-Stack Web Developer',
    message:
      'Wallet APP is very easy to use. Sending money has never been this fast!',
  },
  {
    img: 'https://i.ibb.co.com/47w1b41/images-4.jpg',
    name: 'Rasel',
    role: 'Software Engineer',
    message: 'good',
  },
  {
    img: 'https://i.ibb.co.com/z8p63KS/cartton.jpg',
    name: 'Sadia Khan',
    role: 'Designer',
    message:
      'The UI is very user-friendly. Tracking my spending is so simple now.',
  },
  {
    img: 'https://i.ibb.co.com/PGgKf7G3/n.jpg',
    name: 'Neela',
    role: 'Product Manager',
    message:
      'Wallet APP is very easy to use. Sending money has never been this fast!',
  },
  {
    img: 'https://i.ibb.co.com/LDNxYfFM/322661271-732040441867635-6331001268726481519-n.jpg',
    name: 'Rima',
    role: 'Software Engineer',
    message: 'I love the security and quick transactions. Highly recommended!',
  },
];

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="bg-primary rounded-xl shadow-md p-6 flex flex-col items-center text-center mx-4 min-w-[250px]">
    <img
      src={review.img}
      alt={review.name}
      className="w-16 h-16 rounded-full mb-4 object-cover"
    />
    <h3 className="font-semibold text-lg">{review.name}</h3>
    <p className="text-sm text-muted-foreground mb-2">{review.role}</p>
    <p className="text-sm">{review.message}</p>
  </div>
);

const Reviews = () => {
  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <Marquee gradient={false} speed={50}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Marquee>
    </section>
  );
};

export default Reviews;
