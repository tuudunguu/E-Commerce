"use client"

import { Container } from '@/components/assets/Container';
import { ProductCard } from '@/components/assets/ProductCard';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState , useEffect } from 'react';
import { api } from '@/lib';



export const ProductOfPage = () => {
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
      <div className="w-full grid grid-rows-5 grid-cols-4 gap-x-5 gap-y-12 pt-12 pb-20">
        <div className="w-full h-fit flex flex-col gap-10 row-span-5 col-span-1">
          <div className="w-full flex flex-col h-fit gap-4 text-black">
            <h4 className="font-bold">Ангилал</h4>

            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Малгай" id="Малгай" />
                <Label htmlFor="option-one">Малгай</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Усны сав" id="Усны сав" />
                <Label htmlFor="option-two">Усны сав</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="T-shirt" id="T-shirt" />
                <Label htmlFor="T-shirt">T-shirt</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Hoodie" id="Hoodie" />
                <Label htmlFor="Hoodie">Hoodie</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Tee" id="Tee" />
                <Label htmlFor="Tee">Tee</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Цүнх" id="Цүнх" />
                <Label htmlFor="Цүнх">Цүнх</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 text-black">
            <h4 className="font-bold ">Хэмжээ</h4>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Free" id="Free" />
                <Label htmlFor="Free">Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="S" id="S" />
                <Label htmlFor="S">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="M" id="M" />
                <Label htmlFor="M">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="L" id="L" />
                <Label htmlFor="L">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="XL" id="XL" />
                <Label htmlFor="XL">XL</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2XL" id="2XL" />
                <Label htmlFor="2XL">2XL</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="w-full grid row-span-5 col-span-3 grid-rows-5 grid-cols-3 gap-x-5 gap-y-12 ">
          {products.map((product, index) => {
            return (
              <div key={product._id} className="flex  h-[390px]">
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
