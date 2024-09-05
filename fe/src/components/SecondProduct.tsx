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
];

export const SecondProduct = () => {
  return (
    <Container className="bg-white">
      <div className="w-full h-[442px] pt-12">
        <div className="w-full h-[394px] flex justify-between">
          {pruductCardData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.image}
              title={item.title}
              price={item.price}
              heigth="334px"
              className="w-[244px] h-[394px]"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
