// components/CategorySelector.tsx
import React from 'react';

type Category = {
  _id: string;
  name: string;
};
type CategorySelectorProps = {
  mainCategory: string;
  Categories: Category[];

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
          className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 text-black"
          aria-label="Main Category"
        >
          <option value="">Сонгох</option>
          {Categories.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelector;
