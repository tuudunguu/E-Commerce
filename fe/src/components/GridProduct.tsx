'use client';

import { Container } from './assets/Container';
import { ProductCard } from './assets/ProductCard';
import { useState, useEffect } from 'react';
import { api } from '@/lib';
import Link from 'next/link';

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

  console.log("products:", products)

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
        const response = await api.get('http://localhost:3001/product/', {
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
      <div className="w-full grid grid-rows-6 grid-cols-4 pt-12 pb-20 gap-x-5 gap-y-12 ">
        {products.map((product, index) => {
          return (
            
            <div
              key={product._id}
              className={`flex  ${index  === 6 || index  === 7 ? "row-span-2 col-span-2" : "row-span-1 col-span-1"}`} 
              style={{
                height: index === 6 || index === 7 ? "auto" : "390px", 
                
              }}
            >
              <ProductCard img={product.images[0]} title={product.name} price={product.price} id={product._id}/>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

