import sendMoney from '../../assets/images/sendMoney.webp';
import payment from '../../assets/images/payment.webp';
import cashOut from '../../assets/images/cashout.webp';
import bkashBundle from '../../assets/images/wallet-bundle.webp';
import addMoney from '../../assets/images/add-money.webp';
import sevings from '../../assets/images/sevings.webp';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const OurServices = () => {
  const services = [
    { img: sendMoney, title: 'Send Money' },
    { img: payment, title: 'Payment' },
    { img: cashOut, title: 'Cash Out' },
    { img: bkashBundle, title: 'Wallet Bundle' },
    { img: addMoney, title: 'Add Money' },
    { img: sevings, title: 'Savings' },
  ];

  return (
    <>
      <div className="bg-primary py-14 my-24 px-20">
        <h1 className="text-3xl font-bold text-center mb-12">
          Learn more about wallet app services
        </h1>

        <div className="flex items-center justify-between px-8">
          <button className="w-10 h-10 bg-primary/80 rounded-full shadow flex items-center justify-center cursor-pointer">
            <MdOutlineKeyboardArrowLeft size={30} />
          </button>

          <div className="flex gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-14 h-14 object-contain mb-3"
                />
                <p className="text-sm font-medium">{service.title}</p>
              </div>
            ))}
          </div>

          {/* right arrow */}
          <button className="w-10 h-10 rounded-full bg-primary/70 shadow flex items-center justify-center cursor-pointer">
            <MdOutlineKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
};
export default OurServices;
