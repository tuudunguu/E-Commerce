import { Container } from './assets/Container';
import { ProductCard } from './assets/ProductCard';

const pruductCardData = [
  {
    title: 'The Prompt Magazine',
    image: 'M.png',
    price: '120’000₮',
  },
  {
    title: 'Chunky Glyph Tee',
    image: 'Ch.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'smile.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'wild.png',
    price: '120’000₮',
  },
  {
    title: 'All Smiles Nalgene',
    image: 'smile.png',
    price: '120’000₮',
  },
  {
    title: 'Wildflower Hoodie',
    image: 'wild.png',
    price: '120’000₮',
  },
];

export const GridProduct = () => {
  return (
    <Container className="bg-white">
      <div className="w-full h-[1280px] grid grid-rows-3 grid-cols-4 pt-12 gap-x-5 gap-y-12 [&>div:nth-child]:rounded-2xl [&>div:nth-child(1)]:bg-red-600 [&>div:nth-child(2)]:bg-blue-600 [&>div:nth-child(3)]:bg-green-600 [&>div:nth-child(3)]:row-span-2 [&>div:nth-child(3)]:col-span-2 [&>div:nth-child(4)]:bg-purple-600 [&>div:nth-child(4)]:row-span-2 [&>div:nth-child(4)]:col-span-2">
        {pruductCardData.map((item, index) => {
          const customHeight =
            index === 2
              ? 'h-full w-full'
              : index === 3
                ? 'h-full w-full '
                : 'h-full w-full';

          const customInnerHeight =
            index === 2 ? '692px' : index === 3 ? '692px  ' : '334px ';
          return (
            <ProductCard
              key={index}
              img={item.image}
              title={item.title}
              price={item.price}
              heigth={customInnerHeight}
              className={customHeight}
            />
          );
        })}
      </div>
    </Container>
  );
};
