'use client';

import { OrderHistory } from '@/components/OrderHistory';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function () {
  return (
    <>
      <Header />
      <OrderHistory />
      <Footer />
    </>
  );
}
