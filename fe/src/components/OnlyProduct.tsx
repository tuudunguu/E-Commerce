// Correct way to specify client-side rendering in Next.js
'use client';

import { Container } from './assets/Container';
import Image from 'next/image';
import { useState } from 'react';

// Image array
const images = ['back.png', 'side.png', 'hoodie.png', 'front.png'];

export const OnlyProduct = () => {
  const [coreImage, SetCoreImage] = useState('back.png');

  return (
    <Container className="bg-white">
      <div className="w-full h-[520px] grid grid-rows-1 grid-cols-2 gap-x-5 pt-12 pb-20">
        <div className="w-full h-full grid row-span-1 col-span-1 grid-rows-8 grid-cols-6 gap-x-8 ">
          <div className="w-full grid row-span-8 col-span-1 gap-2 py-16">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-fit cursor-pointer"
                  onClick={() => SetCoreImage(item)}
                >
                  {item && (
                    <Image
                      src={`/${item}`}
                      alt="Product image"
                      width={500}
                      height={500}
                      className="rounded-lg w-full h-full object-contain"
                      quality={100}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="w-full grid row-span-8 col-span-5 rounded-lg">
            <Image
              src={`/${coreImage}`}
              alt="Selected product image"
              width={1000}
              height={1000}
              className="rounded-lg w-full h-full object-contain"
              quality={100}
            />
          </div>
        </div>
        <div className="w-full grid row-span-1 col-span-1 "></div>
      </div>
    </Container>
  );
};
