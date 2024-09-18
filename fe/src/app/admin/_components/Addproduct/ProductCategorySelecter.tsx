// components/CategorySelector.tsx
import React from 'react';

type CategorySelectorProps = {
  mainCategory: string;
  Categories: string[];

  onMainCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelector = ({
  mainCategory,

  Categories,

  onMainCategoryChange,
}: CategorySelectorProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full h-full">
      {/* Main Category */}
      <div className="mb-4">
        <label
          htmlFor="mainCategory"
          className="block text-gray-700  mb-2 text-base font-semibold"
        >
          Ерөнхий ангилал
        </label>
        <select
          id="mainCategory"
          value={mainCategory}
          onChange={onMainCategoryChange}
          className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 text-[#8B8E95]"
          aria-label="Main Category"
        >
          <option value="">Сонгох</option>
          {Categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelector;
