// components/TypeSelector.tsx
import { Button } from '@/components/ui/button';
import React from 'react';
import { useState } from 'react';

type TypeSelectorProps = {
  onAddSize: (size: string) => void;
  size: string;
};

const buttonSize = ['S', 'M', 'L', 'XL', '2XL'];

const TypeSelector = ({ onAddSize, size }: TypeSelectorProps) => {
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
            className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300"
            aria-label="Add Size"
          >
            <div className="w-full h-fit flex justify-start items-center gap-3">
              {buttonSize.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => onAddSize(item)}
                >
                  <Button
                    className={`rounded-full h-8 w-8 border border-black ${size.includes(item) ? 'bg-black text-white' : 'bg-white text-black'}`}
                  >
                    {item}
                  </Button>
                </div>
              ))}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeSelector;
