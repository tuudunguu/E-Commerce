'use client'; // This tells Next.js that the component should run on the client-side

import ProductForm from './Addproduct/ProductName';
import { AdminContainer } from './assets/AdminContainer';
import { GrPrevious } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import ProductImages from './Addproduct/ProductImages';
import CategorySelector from './Addproduct/ProductCategorySelecter';
import PriceQuantityForm from './Addproduct/PriceQuantityForm';
import TypeSelector from './Addproduct/TypeSelecter';
import { Button } from '@/components/ui/button';
import { api } from '@/lib';
import axios from 'axios';

type SizeItem = {
  size: string;
  quantity: number;
};

export const AdminAddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<string>('');
  const [images, setImages] = useState<string[]>([]); // This stores URLs of uploaded images
  const [mainCategory, setMainCategory] = useState<string>('');
  const [sizes, setSizes] = useState<SizeItem[]>([]);

  const sumOfSizesQuantity = sizes.reduce(
    (total: number, size: { quantity: number }) => {
      return total + size.quantity;
    },
    0
  );

  console.log('sizes', sizes);

  // Handle Cloudinary image upload
  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    // Upload the image to your backend route that handles Cloudinary
    const response = await axios.post('http://localhost:3001/upload', formData);

    // Return the URL of the uploaded image from Cloudinary
    return response.data.secure_url;
  };

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Upload the selected image to Cloudinary
      const imageUrl = await uploadImageToCloudinary(file);

      // Add the returned image URL to the images array
      setImages([...images, imageUrl]);
    }
  };

  const handleAddSize = (size: string) => {
    if (sizes.some((s) => s.size === size)) {
      setSizes(sizes.filter((s) => s.size !== size));
    } else {
      setSizes([...sizes, { size, quantity: 0 }]);
    }
  };

  const handleSizeQuantityChange = (size: string, quantity: number) => {
    setSizes(sizes.map((s) => (s.size === size ? { ...s, quantity } : s)));
  };

  // Category section
  type Category = {
    _id: string;
    name: string;
  };

  const [categories, setCategories] = useState<Category[]>([]);
  const [Authorization, setAuthorization] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    const getCategoriesData = async () => {
      if (!Authorization) {
        console.error('Authorization token is missing');
        return;
      }

      try {
        const response = await api.get('http://localhost:3001/category/get', {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        });

        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (Authorization) {
      getCategoriesData();
    }
  }, [Authorization]);

  // Create record function for submitting product
  const createRecord = async () => {
    if (!Authorization) {
      console.error('Authorization token is missing');
      return;
    }

    const newProduct = {
      productName,
      description,
      images, // Now contains URLs from Cloudinary
      price,
      mainCategory,
      sizes,
    };

    try {
      const response = await api.post(
        'http://localhost:3001/product/create',
        newProduct,
        {
          headers: {
            Authorization: `Bearer ${Authorization}`,
          },
        }
      );

      console.log('Created product:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <AdminContainer className="bg-[#F7F7F8]">
      <div className="w-full h-fit">
        <div className="w-full h-14 flex justify-start items-center text-black gap-3 pl-4 bg-white">
          <GrPrevious className="text-black" />
          <h4 className="font-normal">Бүтээгдэхүүн нэмэх</h4>
        </div>

        <div className="w-full h-auto p-6 grid grid-cols-2 gap-x-6 gap-y-6 auto-rows-min">
          <div className="col-span-1 row-span-6">
            <ProductForm
              productName={productName}
              description={description}
              onNameChange={(e) => setProductName(e.target.value)}
              onInfoChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-span-1 row-span-5">
            <CategorySelector
              mainCategory={mainCategory}
              Categories={categories}
              onMainCategoryChange={(e) => setMainCategory(e.target.value)}
            />
          </div>
          <div className="col-span-1 row-span-4">
            <TypeSelector
              onAddSize={handleAddSize}
              onSizeQuantityChange={handleSizeQuantityChange} // Pass the handler for quantity change
              sizes={sizes}
            />
          </div>
          <div className="col-span-1 row-span-4">
            <ProductImages
              images={images} // Pass the image URLs to ProductImages component
              setImages={setImages} // Pass setImages to manage image URLs
              Authorization={Authorization}
            />
          </div>
          <div className="col-span-1 row-span-2">
            <PriceQuantityForm
              price={price}
              sumOfSizesQuantity={sumOfSizesQuantity}
              onPriceChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-fit flex justify-end items-center pr-6">
          <Button
            className="w-32 h-14 text-lg font-semibold"
            onClick={createRecord}
          >
            Ниитлэх
          </Button>
        </div>
      </div>
    </AdminContainer>
  );
};
