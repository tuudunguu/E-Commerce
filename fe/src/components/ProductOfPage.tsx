import { Container } from '@/components/assets/Container';
import { ProductCard } from '@/components/assets/ProductCard';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

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

            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Малгай" id="Малгай" />
                <Label htmlFor="option-one">Малгай</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Усны сав" id="Усны сав" />
                <Label htmlFor="option-two">Усны сав</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="T-shirt" id="T-shirt" />
                <Label htmlFor="T-shirt">T-shirt</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Hoodie" id="Hoodie" />
                <Label htmlFor="Hoodie">Hoodie</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Tee" id="Tee" />
                <Label htmlFor="Tee">Tee</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Цүнх" id="Цүнх" />
                <Label htmlFor="Цүнх">Цүнх</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 text-black">
            <h4 className="font-bold ">Хэмжээ</h4>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Free" id="Free" />
                <Label htmlFor="Free">Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="S" id="S" />
                <Label htmlFor="S">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="M" />
                <Label htmlFor="M">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="L" id="L" />
                <Label htmlFor="L">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="XL" id="XL" />
                <Label htmlFor="XL">XL</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2XL" id="2XL" />
                <Label htmlFor="2XL">2XL</Label>
              </div>
            </RadioGroup>
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
