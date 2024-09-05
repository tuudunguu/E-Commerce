import { Container } from './assets/Container';
import Image from 'next/image';

import { LuPhone } from 'react-icons/lu';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <Container className="bg-black">
      <div className="w-full h-[282px] py-16 flex flex-col justify-between ">
        <div className="w-full h-12 flex justify-between items-center">
          <Image
            src="/Logo.png"
            alt="Logo of pinecone"
            width={36}
            height={36}
            quality={100}
          />
          <div className="w-fit h-full flex gap-5">
            <div className="w-fit h-full flex items-center gap-4">
              <div className="rounded-full border border-[#FFFFFF] w-10 h-10 flex justify-center items-center">
                <LuPhone className="w-5 h-5" />
              </div>
              <h5 className="font-medium">(976) 7007-1234</h5>
            </div>
            <div className="w-fit h-full flex items-center gap-4">
              <div className="rounded-full border border-[#FFFFFF] w-10 h-10 flex justify-center items-center">
                <FaRegEnvelope className="w-5 h-5" />
              </div>
              <h5 className="font-medium">(976) 7007-1234</h5>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#FFFFFF1A]"></div>
        <div className="w-full h-[48px] flex justify-between items-center">
          <h5 className="font-medium">© 2024 Ecommerce MN</h5>
          <div className="w-fit h-full flex items-center gap-3">
            <FaFacebook className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
            <FaInstagram className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
            <FaTwitter className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
            <FaLinkedin className="w-5 h-5 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </div>
    </Container>
  );
};
