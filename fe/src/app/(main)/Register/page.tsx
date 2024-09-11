'use client';

import { Register } from '@/components/Register';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

Register;

export default function () {
  return (
    <>
      <Header />
      <Register />
      <Footer />
    </>
  );
}
