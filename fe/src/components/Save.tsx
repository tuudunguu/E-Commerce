'use client';

import { Container } from './assets/Container';
import { FaHeart } from 'react-icons/fa';

export const Save = () => {
  const wishlistItems = [
    { title: 'Chunky Glyph Tee', price: '120’000₮', image: 'hat.png' },
    { title: 'Doodle Hoodie', price: '120’000₮', image: 'hat.png' },
    { title: 'Local Styles Crewneck', price: '120’000₮', image: 'hat.png' },
  ];

  const totalItems = wishlistItems.length;
  const totalPrice = wishlistItems.reduce(
    (total, item) => total + parseInt(item.price.replace(/[^\d]/g, '')),
    0
  );

  return (
    <Container className="bg-white">
      <div className="w-will h-fit  px-[265px] pt-24 pb-28">
        <div className="bg-white shadow-md  rounded-lg p-4 w-full h-fit text-black">
          {/* Wishlist Header */}
          <h2 className="font-bold text-lg mb-4">Хадгалсан бараа</h2>

          {/* Wishlist Items */}
          {wishlistItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded mr-4"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500">{item.price}</p>
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm mt-2">
                    Сагслах
                  </button>
                </div>
              </div>
              <FaHeart className="w-6 h-6" />
            </div>
          ))}

          {/* Total Summary */}
          <div className="border-t pt-4 mt-4 flex justify-between">
            <p className="font-bold">Нийт: {totalItems} бараа</p>
            <p className="font-bold">{totalPrice.toLocaleString()}₮</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
