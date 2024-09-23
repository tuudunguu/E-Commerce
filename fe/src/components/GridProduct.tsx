'use client';

import { Container } from './assets/Container';
import { ProductCard } from './assets/ProductCard';
import { useState, useEffect } from 'react';
import { api } from '@/lib';

export const GridProduct = () => {
  type Product = {
    _id: string;
    name: string;
    description: string;
    images: string[]; // Use string[] because images will likely be URLs
    price: number;
    category: string[];
    sizes: { size: string; quantity: number }[];
    quantity: number;
  };

  const [Authorization, setAuthorization] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // Get token from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  // Fetch the product data when the authorization token is set
  useEffect(() => {
    const getProductData = async () => {
      if (!Authorization) {
        console.error('Authorization token is missing');
        return;
      }

      try {
        const response = await api.get('http://localhost:3001/product/get', {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        });

        setProducts(response.data); // Set the products array from API response
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
      <div className="w-full grid grid-rows-6 grid-cols-4 pt-12 pb-20 gap-x-5 gap-y-12 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(8)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:pt-20">
        {products.map((product, index) => {
          return (
            <div
              key={product._id}
              className={`flex items-start ${index % 7 === 0 || index % 8 === 0 ? "h-[390px]" : "h-[780px]"}`}
            >
              <ProductCard img={product.images[0]} title={product.name} price={product.price} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

