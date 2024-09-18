'use client';

import ProductForm from './Addproduct/ProductName';
import { AdminContainer } from './assets/AdminContainer';
import { GrPrevious } from 'react-icons/gr';
import { useState } from 'react';
import ProductImages from './Addproduct/ProductImages';
import CategorySelector from './Addproduct/ProductCategorySelecter';
import PriceQuantityForm from './Addproduct/PriceQuantityForm';
import TypeSelector from './Addproduct/TypeSelecter';
import TagInput from './Addproduct/TagInput';

export const AdminAddProduct = () => {
  const [productName, setProductName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [images, setImages] = useState<string[]>(['', '', '']); // Initial empty placeholders

  const handleAddImage = () => {
    // Add your logic to add a new image
    setImages([...images, '']);
  };

  const [mainCategory, setMainCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');

  const mainCategories = ['Электроник', 'Гэр ахуйн хэрэгсэл', 'Ном'];
  const subCategories = ['Ухаалаг утас', 'Зөөврийн компьютер', 'Чихэвч'];

  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const handleAddColor = () => {
    console.log('Color added');
  };

  const handleAddSize = () => {
    console.log('Size added');
  };

  const handleAddType = () => {
    console.log('Type added');
  };

  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (newTag: string) => {
    setTags([...tags, newTag]);
    console.log('Added tag:', newTag);
  };

  const suggestedTags = ['Гутал', 'Цүнх', 'Эмэгтэй'];

  return (
    <AdminContainer className="bg-[#F7F7F8]">
      <div className="w-full h-fit">
        <div className="w-full h-14 flex justify-start items-center text-black gap-3 pl-4 bg-white">
          <GrPrevious className="text-black" />
          <h4 className="font-normal">Бүтээгдэхүүн нэмэх</h4>
        </div>
        <div className="w-full h-fit p-6 grid-rows-6 grid-cols-4 pt-12  gap-x-5 gap-y-12">
          <ProductForm
            productName={productName}
            additionalInfo={additionalInfo}
            productCode="#12345678"
            onNameChange={(e) => setProductName(e.target.value)}
            onInfoChange={(e) => setAdditionalInfo(e.target.value)}
          />
          <ProductImages images={images} onAddImage={handleAddImage} />
          <PriceQuantityForm
            price={price}
            quantity={quantity}
            onPriceChange={(e) => setPrice(e.target.value)}
            onQuantityChange={(e) => setQuantity(e.target.value)}
          />
          <CategorySelector
            mainCategory={mainCategory}
            subCategory={subCategory}
            mainCategories={mainCategories}
            subCategories={subCategories}
            onMainCategoryChange={(e) => setMainCategory(e.target.value)}
            onSubCategoryChange={(e) => setSubCategory(e.target.value)}
          />
          <TypeSelector
            onAddColor={handleAddColor}
            onAddSize={handleAddSize}
            onAddType={handleAddType}
          />
          <TagInput suggestedTags={suggestedTags} onAddTag={handleAddTag} />
        </div>
      </div>
    </AdminContainer>
  );
};
