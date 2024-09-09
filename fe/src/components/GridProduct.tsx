'use client';

import { Container } from './assets/Container';
import { ProductCard } from './assets/ProductCard';

const pruductCardData = [
  {
    title: 'The Prompt Magazine',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Chunky Glyph Tee',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'The Prompt Magazine',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Chunky Glyph Tee',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'The Prompt Magazine',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Chunky Glyph Tee',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'hat.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'hat.png',
    price: '120’000₮',
  },
];

export const GridProduct = () => {
  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full grid grid-rows-6 grid-cols-4 pt-12 pb-20 gap-x-5 gap-y-12  [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(7)]:col-span-2  [&>div:nth-child(8)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:pt-20">
        {pruductCardData.map((item, index) => {
          return (
            <div key={index} className="flex items-start h-fit">
              <ProductCard
                img={item.image}
                title={item.title}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};
