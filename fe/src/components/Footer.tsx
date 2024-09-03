import { Container } from './assets/Container';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Container background="bg-[#EEEFFB]">
      <div className="w-full h-[532px] flex gap-24">
        <div className="w-1/2 h-full flex flex-col  justify-start items-start gap-7 pt-24 pb-28 ">
          <h2 className="font-extrabold">eCommerce</h2>
          <form className="w-96 h-10 flex items-center justify-between relative ">
            <input
              type="email"
              placeholder="Имэйл хаяг"
              className="w-full h-full px-4 pr-12 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="bg-[#FB2E86] w-fit h-8 flex justify-center items-center absolute right-1  cursor-pointer px-6">
              <h5 className="text-white"> бүртгүүлэх</h5>
            </div>
          </form>
          <div className="">
            <h4>Хаяг</h4>
            <h5 className="text-[#8A8FB9] font-normal">
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              Гурван гол - 401 тоот
            </h5>
          </div>
        </div>
        <div className="w-1/2 h-full flex  pt-24 pb-28">
          <div className="w-1/2 h-full flex flex-col justify-start items-start gap-12">
            <h4>Ангилал</h4>
            <div className="w-full h-full flex flex-col justify-start items-start gap-6">
              <h5 className="text-[#8A8FB9] font-normal">Хувцас</h5>
              <h5 className="text-[#8A8FB9] font-normal">Камер, хэрэгсэл</h5>
              <h5 className="text-[#8A8FB9] font-normal">
                Ухаалаг утас, таблет
              </h5>
              <h5 className="text-[#8A8FB9] font-normal">Чихэвч</h5>
              <h5 className="text-[#8A8FB9] font-normal">Гэр ахуйн бараа</h5>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-start items-start gap-12">
            <h4>Бусад</h4>
            <div className="w-full h-full flex flex-col justify-start items-start gap-6">
              <h5 className="text-[#8A8FB9] font-normal">Бидний тухай</h5>
              <h5 className="text-[#8A8FB9] font-normal">Холбоо барих</h5>
              <h5 className="text-[#8A8FB9] font-normal">
                Түгээмэл асуулт хариулт
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-14 flex justify-between items-center bg-[#E7E4F8] px-10">
        <h5 className="text-[#8A8FB9] font-normal">©ecommerce</h5>
        <div className="w-fit h-full flex items-center gap-3 ">
          <FaFacebook className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
          <FaInstagram className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
          <FaTwitter className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
    </Container>
  );
};
