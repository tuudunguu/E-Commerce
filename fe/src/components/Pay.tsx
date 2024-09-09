'use client';

import { time } from 'console';
import { Container } from './assets/Container';
import { useEffect, useState } from 'react';

type PayProps = {
  index: number;
};

export const Pay = () => {
  const LogosOfBank = [
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
    'Mbank.png',
  ];

  const [seconds, setSeconds] = useState<number>(900);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="rounded-lg  w-full h-fit px-[140px]  pb-[140px] pt-12">
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-6 gap-10">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-center text-black">
          <h2 className="font-bold mb-4">3. Төлбөр төлөлт</h2>

          <div className="flex justify-center items-center mb-4">
            <img src="/qr_code.png" alt="QR Code" className="w-40 h-40" />
          </div>

          <div className="mb-4">
            <span className="text-gray-500 text-sm">{seconds}</span>
          </div>

          <p className="font-semibold mb-2">Төлөх боломжтой банкууд</p>
          <div className="grid grid-cols-8 gap-2 px-6 justify-center items-center">
            {LogosOfBank.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Bank logo ${index}`}
                className="w-10 h-10"
              />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
              Буцах
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
