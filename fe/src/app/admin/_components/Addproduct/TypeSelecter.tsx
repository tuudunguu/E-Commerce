import { Button } from '@/components/ui/button';
import React from 'react';

type SizeItem = {
  size: string;
  quantity: number;
};

type TypeSelectorProps = {
  onAddSize: (size: string) => void;
  onSizeQuantityChange: (size: string, quantity: number) => void; // New handler for quantity change
  sizes: SizeItem[]; // Array of objects with size and quantity
};

const buttonSize = ['S', 'M', 'L', 'XL', '2XL'];

const TypeSelector = ({
  onAddSize,
  onSizeQuantityChange,
  sizes,
}: TypeSelectorProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full h-full">
      <label className="block text-gray-700 text-base font-semibold mb-4">
        Төрөл
      </label>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Хэмжээ</span>
          <div className="w-full h-fit flex justify-start items-center gap-3">
            {buttonSize.map((item, index) => (
              <div key={index} className="cursor-pointer flex flex-col gap-2">
                <Button
                  onClick={() => onAddSize(item)}
                  className={`rounded-full h-8 w-8 border border-black ${sizes.some((s) => s.size === item) ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {item}
                </Button>
                <input
                  type="number"
                  className="w-10 h-5 border border-black text-black"
                  value={sizes.find((s) => s.size === item)?.quantity || 0} // Find the quantity for this size
                  onChange={(e) =>
                    onSizeQuantityChange(item, parseInt(e.target.value) || 0)
                  } // Handle size quantity change
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeSelector;
