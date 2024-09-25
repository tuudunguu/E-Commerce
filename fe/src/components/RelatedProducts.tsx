'use client';

import { Container } from './assets/Container';
import { ProductCard } from './assets/ProductCard';
import { useEffect , useState } from 'react';
import { api } from '@/lib';



export const RelatedProducts = () => {

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
        const allProducts = response.data;
        const firstEightProducts = allProducts.slice(0, 8); // Get only the first 8 products
        setProducts(firstEightProducts); 
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
      <div className="w-full h-fit flex flex-col items-start gap-12 pt-12 pb-20">
        <h2 className="text-3xl font-bold text-black">Холбоотой бараа</h2>
        <div className="w-full grid grid-rows-2 grid-cols-4  gap-x-5 gap-y-12  ">
          {products.map((product, index) => {
            return (
              <div key={product._id} className="flex h-[390px]">
                <ProductCard
                  img={product.images[0]}
                  title={product.name}
                  price={product.price}
                  id={product._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
