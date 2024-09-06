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
];

export const SecondProduct = () => {
  return (
    <Container className="bg-white">
      <div className="w-full  pt-12">
        <div className="w-full  flex gap-5">
          {pruductCardData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
