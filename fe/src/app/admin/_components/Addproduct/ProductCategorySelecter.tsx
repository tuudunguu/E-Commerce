// components/CategorySelector.tsx
import React from 'react';

type CategorySelectorProps = {
  mainCategory: string;
  subCategory: string;
  mainCategories: string[];
  subCategories: string[];
  onMainCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelector = ({
  mainCategory,
  subCategory,
  mainCategories,
  subCategories,
  onMainCategoryChange,
  onSubCategoryChange,
}: CategorySelectorProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full max-w-full">
      {/* Main Category */}
      <div className="mb-4">
        <label
          htmlFor="mainCategory"
          className="block text-gray-700 font-medium mb-2"
        >
          Ерөнхий ангилал
        </label>
        <select
          id="mainCategory"
          value={mainCategory}
          onChange={onMainCategoryChange}
          className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
          aria-label="Main Category"
        >
          <option value="">Сонгох</option>
          {mainCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sub Category */}
      <div>
        <label
          htmlFor="subCategory"
          className="block text-gray-700 font-medium mb-2"
        >
          Дэд ангилал
        </label>
        <select
          id="subCategory"
          value={subCategory}
          onChange={onSubCategoryChange}
          className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
          aria-label="Sub Category"
        >
          <option value="">Сонгох</option>
          {subCategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelector;
