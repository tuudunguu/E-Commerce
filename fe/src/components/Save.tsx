'use client';

import { Container } from './assets/Container';
import { FaHeart } from 'react-icons/fa';
import { useEffect , useState } from 'react';
import { api } from '@/lib';

export const Save = () => {
  type Product = {
    _id: string;
    name: string;
    description: string;
    images: string[]; // Use string[] because images will likely be URLs
    price: string;
    category: string[];
    sizes: { size: string; quantity: number }[];
    quantity: number;
  };


  const [Authorization, setAuthorization] = useState<string | null>(null);
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    const getProductData = async () => {
      if (!Authorization) {
        console.error('Authorization token is missing');
        return;
      }

      try {
        const response = await api.get('http://localhost:3001/product/savedProduct', {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        });

        setSavedProducts(response.data); // Set the products array from API response
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (Authorization) {
      getProductData();
    }
  }, [Authorization]);

  // const totalItems = savedProducts.length;
  // const totalPrice = savedProducts.reduce(
  //   (total, item) => total + (item.price.replace(/[^\d]/g, '')),
  //   0
  // );

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-will h-fit  px-[265px] pt-24 pb-28">
        <div className="bg-white shadow-md  rounded-lg p-4 w-full h-fit text-black">
          {/* Wishlist Header */}
          <h2 className="font-bold text-lg mb-4">Хадгалсан бараа</h2>

          {/* Wishlist Items */}
          {savedProducts.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 rounded mr-4"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
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
            <p className="font-bold">Нийт:120000 бараа</p>
            <p className="font-bold">160000₮</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
