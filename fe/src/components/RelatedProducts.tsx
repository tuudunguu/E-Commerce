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
];

export const RelatedProducts = () => {
  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full h-fit flex flex-col items-start gap-12 pt-12 pb-20">
        <h2 className="text-3xl font-bold text-black">Холбоотой бараа</h2>
        <div className="w-full grid grid-rows-2 grid-cols-4  gap-x-5 gap-y-12  ">
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
      </div>
    </Container>
  );
};
