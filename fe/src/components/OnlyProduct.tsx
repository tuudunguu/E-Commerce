// Correct way to specify client-side rendering in Next.js
'use client';

import { Container } from './assets/Container';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { FaRegHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { StarRating } from './assets/StarRating';

import Link from 'next/link';
import Router from 'next/router';

// Image array
const images = ['back.png', 'side.png', 'hoodie.png', 'front.png'];

const buttonSize = ['S', 'M', 'L', 'XL', '2XL'];

export const OnlyProduct = () => {
  const [coreImage, SetCoreImage] = useState('back.png');
  const [selectedSize, SetSelectedSize] = useState('S');
  const [link, setLink] = useState(true);

  const [count, setCount] = useState(1);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () =>
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const reviews = [
      { rating: 1 },
      { rating: 1.5 },
      { rating: 2 },
      { rating: 2.5 },
      { rating: 3 },
      { rating: 3.5 },
      { rating: 4 },
      { rating: 4.5 },
      { rating: 5 },
    ];
    const avgRating =
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    setAverageRating(avgRating);
  }, []);

  const handleClick = () => {
    setLink(!link);
  };

  return (
    <Container className="bg-white">
      <div className="w-full h-[520px] grid grid-rows-1 grid-cols-2 gap-x-5 pt-12 ">
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

          <div className="w-full  h-full grid row-span-8 col-span-5 rounded-lg">
            <div className="h-full w-full cursor-pointer ">
              <Image
                src={`/${coreImage}`}
                alt="Selected product image"
                width={1000}
                height={1000}
                className="rounded-lg w-full h-full object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="w-full grid row-span-1 col-span-1  pt-[80px] flex-col">
          <div className="h-[320px] w-full flex flex-col items-start gap-4">
            <div className="w-full h-fit flex flex-col items-start gap-2 text-black">
              <Badge variant="outline" className="border border-[#2563EB] ">
                Шинэ
              </Badge>
              <div className="w-full h-fit flex justify-start items-center gap-3">
                <h3 className="font-bold">Wildflower Hoodie</h3>
                <FaRegHeart className="w-6 h-6 hover:text-blue-500 cursor-pointer  transform transition-transform duration-300 hover:scale-110" />
              </div>
              <h4>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</h4>
            </div>
            <div className="w-full h-fit flex flex-col items-start gap-2 text-black">
              <h4>Хэмжээний заавар</h4>
              <div className="w-full h-fit flex justify-start items-center gap-3">
                {buttonSize.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" cursor-pointer"
                      onClick={() => SetSelectedSize(item)}
                    >
                      <Button
                        className={`rounded-full h-8 w-8 border border-black ${selectedSize === item ? 'bg-black text-white' : 'bg-white text-black'}`}
                      >
                        {item}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full h-fit flex  items-center gap-2">
              <Button
                onClick={decrement}
                className="rounded-full h-8 w-8 border-black bg-white text-black text-lg"
              >
                -
              </Button>
              <span className="text-black text-lg">{count}</span>
              <Button
                onClick={increment}
                className="rounded-full h-8 w-8 border-black bg-white text-black text-lg"
              >
                +
              </Button>
            </div>
            <div className="w-full h-fit flex flex-col items-start gap-2 text-black">
              <h3 className="text-xl font-bold text-black"> 120,000₮</h3>
              <Button className="bg-[#2563EB] rounded-[20px] px-10 text-base font-medium">
                Сагсанд нэмэх
              </Button>
            </div>
          </div>

          <div className="h-[44px] w-full flex flex-col items-start">
            <div className="w-full h-fit flex items-start gap-4">
              <h5 className="text-black">Үнэлгээ</h5>
              <Link
                href={`${link === true ? '/SelectedProductWithReview' : '/SelectedProduct'}`}
              >
                <h5
                  className="text-black hover:text-[#2563EB] cursor-pointer"
                  onClick={handleClick}
                >
                  бүгдийг харах
                </h5>
              </Link>
            </div>
            <div className="w-full h-fit flex items-center gap-2 ">
              <StarRating
                rating={Math.round(averageRating)}
                onClick={() => {}}
              />
              <span className="text-black font-bold">
                {averageRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
