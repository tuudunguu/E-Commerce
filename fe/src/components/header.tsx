'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Profile } from './Profile';
import { useState } from 'react';

export const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="w-screen h-[68px] px-6 py-4 bg-black">
      <div className=" h-full w-full flex justify-between items-center">
        <div className="w-fit h-full flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Logo of pinecone"
              width={32}
              height={32}
              quality={100}
              className="cursor-pointer"
            />
            <h5 className="cursor-pointer">ECOMMERCE</h5>
          </Link>
          <Link href="/Products">
            <h5 className="cursor-pointer hover:text-blue-500 transform transition-transform duration-300 hover:scale-110">
              Ангилал
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
              className="w-full h-full px-8 pr-12 rounded-2xl  bg-[#18181B]"
            />
          </form>
        </div>
        <div className="w-fit h-full flex items-center gap-4 ">
          <div className="w-fit h-full flex items-center gap-4 ">
            <Link href="/Save">
              <FaRegHeart className="w-6 h-6 hover:text-blue-500 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link href="/CartOfproduct">
              <IoCartOutline className="w-6 h-6 hover:text-blue-500 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>
          <div className="w-fit h-full flex items-center gap-4 ">
            <Link href="/Register">
              <Button className="border border-[#2563EB] bg-[#18181B] hover:bg-blue-500">
                Бүртгүүлэх
              </Button>
            </Link>
            <Link href="/Login">
              <Button className="border border-[#2563EB] bg-[#18181B] hover:bg-blue-500">
                Нэвтрэх
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
