import { ProductOfPage } from '@/components/ProductOfPage';
import { Header } from '@/components/header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <ProductOfPage />;
      <Footer />
    </>
  );
}
