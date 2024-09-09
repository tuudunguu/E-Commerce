import { Container } from '@/components/assets/Container';
import { ProductCard } from '@/components/assets/ProductCard';

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
];

export const ProductOfPage = () => {
  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full grid grid-rows-5 grid-cols-4 gap-x-5 gap-y-12 pt-12 pb-20">
        <div className="w-full h-fit flex flex-col gap-10 row-span-5 col-span-1">
          <div className="w-full flex flex-col h-fit gap-4 text-black">
            <h4 className="font-bold">Ангилал</h4>
            <div className="w-full h-fit flex flex-col gap-2">
              <h5 className="font-normal">Малгай</h5>
              <h5 className="font-normal">Усны сав</h5>
              <h5 className="font-normal">T-shirt</h5>
              <h5 className="font-normal">Hoodie</h5>
              <h5 className="font-normal">Tee</h5>
              <h5 className="font-normal">Цүнх</h5>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 text-black">
            <h4 className="font-bold ">Ангилал</h4>
            <div className="w-full h-fit gap-2 flex flex-col">
              <h5 className="font-normal">Малгай</h5>
              <h5 className="font-normal">Усны сав</h5>
              <h5 className="font-normal">T-shirt</h5>
              <h5 className="font-normal">Hoodie</h5>
              <h5 className="font-normal">Tee</h5>
              <h5 className="font-normal">Цүнх</h5>
            </div>
          </div>
        </div>
        <div className="w-full grid row-span-5 col-span-3 grid-rows-5 grid-cols-3 gap-x-5 gap-y-12 ">
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
