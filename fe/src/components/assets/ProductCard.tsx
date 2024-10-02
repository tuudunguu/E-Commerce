'use client';

import { FaRegHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '@/lib';

type SpecialProductCardProps = {
  img?: string;
  title?: string;
  price?: number;
  id?: string;
};

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

export const ProductCard = ({ img, title, price, id }: SpecialProductCardProps) => {
  const [like, setLike] = useState<boolean>(false); 
  const [user, setUser] = useState<string>();
  const [Authorization, setAuthorization] = useState<string | null>(null);
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getUser = async () => {
      if (!Authorization) {
        console.error('Authorization token is missing');
        return;
      }

      try {
        const response = await api.get('http://localhost:3001/user/me', {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (Authorization) {
      getUser();
    }
  }, [Authorization]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token')); 
    }
  }, []);

  const UpdateLike = async () => {
    if (!Authorization) {
      console.error('Authorization token is missing');
      return;
    }

    const NewLike = { id, user };

    try {
      const response = await api.post(
        'http://localhost:3001/auth/updateLike',
        NewLike,
        {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        }
      );

      console.log('Like updated:', response.data);
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

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

        setSavedProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (Authorization) {
      getProductData();
    }
  }, [Authorization]);

  
  const handleLike = () => {
    const product = savedProducts.find((savedProduct) => savedProduct._id === id);
    if(product){
      setLike(!like)
    }


    UpdateLike();   
 
  };
  

  return (
    <div className="w-full h-full flex justify-between gap-2 flex-col">
      <div className="w-full h-full relative overflow-hidden rounded-2xl cursor-pointer">
        <Link href={`/Products/${id}`}>
          <div className="w-full h-full transform transition-transform duration-300 hover:scale-110">
            {img && (
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </Link>
        <FaRegHeart
          onClick={handleLike}
          className={`absolute right-4 top-5 w-6 h-6 cursor-pointer transform transition-transform duration-300 hover:scale-110 ${
          like ? 'text-blue-500' : 'text-black'
          }`}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="w-full h-8 overflow-auto">
          <h5 className="text-base text-black">{title}</h5>
        </div>
        <h5 className="font-bold text-base text-black">{price}</h5>
      </div>
    </div>
  );
};
