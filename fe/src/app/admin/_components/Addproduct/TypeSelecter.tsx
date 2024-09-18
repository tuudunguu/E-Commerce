// components/TypeSelector.tsx
import React from 'react';

type TypeSelectorProps = {
  onAddSize: () => void;
  onAddType: () => void;
};

const TypeSelector = ({ onAddSize, onAddType }: TypeSelectorProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full h-full">
      <label className="block text-gray-700 text-base font-semibold mb-4">
        Төрөл
      </label>

      <div className="space-y-4">
        {/* Add Size Button */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Хэмжээ</span>
          <button
            onClick={onAddSize}
            className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300"
            aria-label="Add Size"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              />
            </svg>
          </button>
        </div>

        {/* Add Type Button */}
        <button
          onClick={onAddType}
          className="mt-4 px-4 py-2 border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
        >
          Төрөл нэмэх
        </button>
      </div>
    </div>
  );
};

export default TypeSelector;
