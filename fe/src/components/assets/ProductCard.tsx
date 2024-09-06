'use client';

import Image from 'next/image';

import { FaRegHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type SpecialProductCardProps = {
  img?: string;
  title?: string;
  price?: string;
};

export const ProductCard = ({ img, title, price }: SpecialProductCardProps) => {
  const [heart, setHeart] = useState(false);

  return (
    <div className="w-full h-full  flex justify-between gap-2 flex-col ">
      <div className="w-full relative  overflow-hidden rounded-2xl cursor-pointer">
        <div className="w-full h-full  transform transition-transform duration-300 hover:scale-110">
          {img && (
            <Image
              src={`/${img}`}
              alt="Product image"
              width={4000}
              height={4000}
              className="rounded-2xl w-full h-full object-contain "
              quality={100}
            />
          )}
        </div>
        <FaRegHeart className="absolute right-4 top-5 w-6 h-6 text-black hover:text-blue-500 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
      </div>

      <div className="flex flex-col gap-1">
        <h5 className="text-base text-black">{title}</h5>
        <h5 className="font-bold text-base text-black ">{price}</h5>
      </div>
    </div>
  );
};
