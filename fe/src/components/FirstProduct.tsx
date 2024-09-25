"use client";

import { Container } from './assets/Container';
import { useState, useEffect } from 'react';
import { api } from '@/lib';

export const FirstProduct = () => {
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
  const [product, setProduct] = useState<Product | null>(null);

  // Get token from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  // Fetch the first product data when the authorization token is set
  useEffect(() => {
    const getProductData = async () => {
      if (!Authorization) {
        console.error('Authorization token is missing');
        return;
      }

      try {
        // Fetch only one product
        const response = await api.get('http://localhost:3001/product/?page=1&per_page=1', {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        });

        // Set the product state to the first (and only) product
        setProduct(response.data[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (Authorization) {
      getProductData();
    }
  }, [Authorization]);

  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full h-[494px] pt-12">
        {/* Display the first product if it exists */}
        {product && (
          <div className="w-full h-[446px] rounded-2xl relative" key={product._id}>
            <img
              src={product.images[2]} // Access the first image
              alt={product.name}
             className='w-full h-full object-cover rounded-2xl'
            />
            <div className="w-[164px] h-[72px] absolute bottom-8 left-8 flex flex-col justify-between items-start">
              <h5 className="font-normal text-black">{product.name}</h5>
              <h1 className="text-[36px] font-bold text-black">{product.price}</h1>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
