import { FirstProduct } from '@/components/FirstProduct';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SecondProduct } from '@/components/SecondProduct';
import { GridProduct } from '@/components/GridProduct';

export default function Home() {
  return (
    <>
      <FirstProduct />
      {/* <SecondProduct /> */}
      <GridProduct />
    </>
  );
}
