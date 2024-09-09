'use client';

import { Container } from './assets/Container';
import Image from 'next/image';

export const Success = () => {
  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-will h-fit  px-[265px] pt-[100px] pb-[350px]">
        <div className="bg-gray-100 shadow-md rounded-lg flex flex-col justify-center items-center p-4 w-[510px] h-[185px]">
          <div className="text-green-500 mb-2">
            <Image
              src="/circle.png"
              alt="Product image"
              width={4000}
              height={4000}
              className="rounded-2xl w-full h-full object-contain "
              quality={100}
            />
          </div>
          <p className="text-gray-700 text-center font-semibold">
            Захиалга амжилттай баталгаажлаа.
          </p>
        </div>
      </div>
    </Container>
  );
};
