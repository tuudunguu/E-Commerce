import { FirstProduct } from '@/components/FirstProduct';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { GridProduct } from '@/components/GridProduct';

export default function Home() {
  return (
    <>
      <Header />
      <FirstProduct />
      <GridProduct />
      <Footer />
    </>
  );
}
