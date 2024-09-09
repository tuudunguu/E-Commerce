'use client';

import { Container } from './assets/Container';
import React, { useState } from 'react';
import Link from 'next/link';

export const Address = () => {
  const cartItems = [
    {
      title: 'Chunky Glyph Tee',
      price: '120’000₮',
      quantity: 1,
      image: 'hat.png',
    },
    {
      title: 'Chunky Glyph Tee',
      price: '120’000₮',
      quantity: 1,
      image: 'hat.png',
    },
    {
      title: 'Chunky Glyph Tee',
      price: '240’000₮',
      quantity: 2,
      image: 'hat.png',
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity,
      0
    );
  };

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-fit py-12  ">
        {/* Step Tracker */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex space-x-8 text-black">
          {/* Cart Summary */}
          <div className="w-1/3 bg-gray-50 rounded-lg p-4">
            <h2 className="font-bold mb-4">Сагс ({cartItems.length})</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded mr-4"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p>
                    {item.quantity} x {item.price}
                  </p>
                </div>
              </div>
            ))}

            <div className="text-right font-bold mt-2">
              Үнийн дүн: {calculateTotal().toLocaleString()}₮
            </div>
          </div>

          {/* Shipping Information */}
          <div className="w-2/3 bg-gray-50 rounded-lg p-6 text-black">
            <h2 className="font-bold mb-4">2. Хүргэлтийн мэдээлэл оруулах</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Овог:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Овог"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Нэр:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Самбуу"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Утасны дугаар:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Утасны дугаар"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Хаяг:</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Хаяг"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Нэмэлт мэдээлэл:
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Хүргэлттэй холбоотой нэмэлт мэдээлэл"
                ></textarea>
              </div>

              <div className="flex justify-between">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                  Буцах
                </button>
                <Link href="/Pay">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Төлбөр төлөх
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
