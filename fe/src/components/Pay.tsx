'use client';

import { Container } from './assets/Container';

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

  return (
    <Container className="bg-white">
      <div className="rounded-lg  w-full h-fit px-[140px]  pb-[140px] pt-12">
        {/* Step Tracker */}
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

        {/* Payment Section */}
        <div className="bg-gray-50 rounded-lg p-6 text-center text-black">
          <h2 className="font-bold mb-4">3. Төлбөр төлөлт</h2>

          {/* QR Code */}
          <div className="flex justify-center items-center mb-4">
            <img src="/qr_code.png" alt="QR Code" className="w-40 h-40" />
          </div>

          {/* Time Indicator */}
          <div className="mb-4">
            <span className="text-gray-500 text-sm">14:59</span>
          </div>

          {/* Supported Banks */}
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

          {/* Back Button */}
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
