import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

export const Header = () => {
  return (
    <div className="w-screen h-[68px] px-6 py-4 bg-black">
      <div className=" h-full w-full flex justify-between items-center">
        <div className="w-fit h-full flex items-center gap-4">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo of pinecone"
              width={32}
              height={32}
              quality={100}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/Products">
            <h5 className="cursor-pointer hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
              Бүтээгдэхүүн
            </h5>
          </Link>
        </div>
        <div className="w-fit h-full flex items-center gap-4">
          <form className="w-30 h-full flex items-center justify-between relative ">
            <div className=" w-8 h-8 flex justify-center items-center absolute left-0  cursor-pointer">
              <FaSearch className="text-white  " />
            </div>
            <input
              type="text"
              placeholder="     Search..."
              className="w-full h-full px-4 pr-12 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#18181B]"
            />
          </form>
        </div>
        <div className="w-fit h-full flex items-center gap-4">
          <FaRegHeart className="w-6 h-6 hover:text-blue-500 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
          <IoCartOutline className="w-6 h-6 hover:text-blue-500 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
          <Button className="border border-[#2563EB] bg-[#18181B]">
            Бүртгүүлэх
          </Button>
          <Button className="bg-[#2563EB]">Нэвтрэх</Button>
        </div>
      </div>
    </div>
  );
};
