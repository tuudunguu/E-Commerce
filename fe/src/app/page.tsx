import { Carousel } from '@/components/Carousel';
import { AboutService } from '@/components/AboutService';
import { SpecialProducts } from '@/components/SpecialProducts';

export default function Home() {
  return (
    <>
      <Carousel />
      <SpecialProducts />
      <AboutService />
    </>
  );
}
