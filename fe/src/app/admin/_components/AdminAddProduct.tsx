'use client';

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

type SizeItem = {
  size: string;
  quantity: number;
};

export const AdminAddProduct = () => {
  const [productName, setProductName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [images, setImages] = useState<string[]>(['', '', '']);
  const [mainCategory, setMainCategory] = useState<string>('');
  const [sizes, setSizes] = useState<SizeItem[]>([]); // Array of objects for size and quantity

  console.log('sizes', sizes);

  const handleAddImage = () => {
    setImages([...images, '']);
  };

  const handleAddSize = (size: string) => {
    if (sizes.some((s) => s.size === size)) {
      setSizes(sizes.filter((s) => s.size !== size));
    } else {
      setSizes([...sizes, { size, quantity: 0 }]);
    }
  };

  const handleSizeQuantityChange = (size: string, quantity: number) => {
    setSizes(
      sizes.map((s) => (s.size === size ? { ...s, quantity } : s)) // Update the quantity for the selected size
    );
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
      additionalInfo,
      images,
      price,
      quantity,
      mainCategory,
      sizes, // Passing sizes with quantities
    };

    try {
      const response = await api.post(
        'http://localhost:3001/products',
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
              additionalInfo={additionalInfo}
              onNameChange={(e) => setProductName(e.target.value)}
              onInfoChange={(e) => setAdditionalInfo(e.target.value)}
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
            <ProductImages images={images} onAddImage={handleAddImage} />
          </div>
          <div className="col-span-1 row-span-2">
            <PriceQuantityForm
              price={price}
              quantity={quantity}
              onPriceChange={(e) => setPrice(e.target.value)}
              onQuantityChange={(e) => setQuantity(e.target.value)}
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
