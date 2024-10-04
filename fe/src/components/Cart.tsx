'use client';

import { Container } from './assets/Container';

import { useState , useEffect} from 'react';
import Link from 'next/link';
import { api } from '@/lib';

export const Cart = () => {

  type Product = {
    _id: string;
    name: string;
    description: string;
    images: string[]; 
    price: string | number; 
    category: string[];
    sizes: { size: string; quantity: number }[];
    quantity: number;
    like: Product;
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



  return (
    <Container className="bg-[#f6f6f6]">
      <div className="rounded-lg  w-full h-fit px-[140px]  pb-[140px] pt-12">
        {/* Step Tracker */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              1
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4 shadow-md text-black ">
          <h2 className="font-bold mb-4 text-black">
            1. Сагс ({savedProducts.length})
          </h2>
          {savedProducts.map((item) => (
            <div key={item._id} className="flex items-center mb-4 text-black">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-16 h-16 rounded mr-4"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="w-8 h-8 border rounded-full flex items-center justify-center"
                    // onClick={() => handleQuantityChange(savedProducts.length, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="w-8 h-8 border rounded-full flex items-center justify-center"
                    // onClick={() => handleQuantityChange(index, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="font-semibold text-right">
                <p>{item.price}</p>
              </div>
              <button
                className="w-6 h-6 ml-4 text-gray-400 hover:text-red-500"
                // onClick={() => handleRemoveItem(index)}
              >
                🗑️
              </button>
            </div>
          ))}

          <div className="text-right font-bold mt-2 text-black">
            {/* Үнийн дүн: {calculateTotal().toLocaleString()}₮ */}
          </div>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-end">
          <Link href="/Address">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Худалдан авах
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
