'use client';

import { Container } from './assets/Container';
import { SpecialProductCard } from './assets/SpecialPruductCard';
import { useState, useEffect } from 'react';

const SpecialCardData = [
  {
    title: 'Дан хүрэм пиджак',
    image: 'image 30.jpg',
    price: '750’000₮',
  },
  {
    title: 'Ширээний чийдэн',
    image: 'image 94.png',
    price: '750’000₮',
  },
  {
    title: 'Гадуур хүрэм',
    image: '2 1.png',
    price: '750’000₮',
  },
  {
    title: 'Дуу намсгагчтай чихэвч',
    image: 'image 29.png',
    price: '750’000₮',
  },
  {
    title: 'Canon камер',
    image: 'cam 3.jpg',
    price: '750’000₮',
  },
  {
    title: 'Усан ягаан сандал',
    image: 'image 1165.png',
    price: '750’000₮',
  },
  {
    title: 'Саарал сандал',
    image: 'image 1173.png',
    price: '750’000₮',
  },
  {
    title: 'Laptop цүнх',
    image: '10011 1.png',
    price: '750’000₮',
  },
  {
    title: 'Ухаалаг утас',
    image: 'unnamed 1.jpg',
    price: '750’000₮',
  },
  {
    title: 'Эрэгтэй ухаалаг утас',
    image: '1562173100-movado-connect-1562173094 2.png',
    price: '750’000₮',
  },
  {
    title: 'Beats чихэвч',
    image: 'purepng 1.png',
    price: '750’000₮',
  },
  {
    title: 'Зөөлөвчэй ягаан сандал',
    image: 'image 1164.png',
    price: '750’000₮',
  },
];

export const SpecialProducts = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log('slideIndex=', slideIndex);

  const totalWindows = Math.ceil(SpecialCardData.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === totalWindows ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [totalWindows]);

  return (
    <Container background="bg-[#FFF]">
      <div className="w-full h-[580px] flex flex-col justify-center items-center gap-16 pb-16">
        <h2 className="font-extrabold text-[#151875]">Онцлох бүтээгдэхүүн</h2>

        <div className="w-fit h-full flex justify-between items-center overflow-hidden">
          <div
            className="w-[300%] flex justify-center gap-8 "
            style={{
              transform: `translateX(-${(slideIndex * 100) / totalWindows}%)`,
              transition: 'transform 1s',
            }}
          >
            {SpecialCardData.map((item, index) => (
              <SpecialProductCard
                key={index}
                img={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalWindows }).map((_, index) => (
            <Indicator
              key={index}
              active={index === slideIndex}
              onClick={() => setSlideIndex(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

type IndicatorProps = {
  active: boolean;
  onClick: () => void;
};

// Indicator component to show which window is active
const Indicator = ({ active, onClick }: IndicatorProps) => {
  return (
    <div
      className={`w-6 h-6 rounded-md ${active ? 'bg-slate-700' : 'bg-slate-400'}`}
      onClick={onClick}
    ></div>
  );
};
