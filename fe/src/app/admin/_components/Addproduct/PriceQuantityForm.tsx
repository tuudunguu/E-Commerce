import React from 'react';

type PriceQuantityFormProps = {
  price: string;
  sumOfSizesQuantity: number;
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PriceQuantityForm = ({
  price,
  sumOfSizesQuantity,
  onPriceChange,
}: PriceQuantityFormProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Price Input */}
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700  mb-2 font-semibold"
          >
            Үндсэн үнэ
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={onPriceChange}
            className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 text-black"
            placeholder="Үндсэн үнэ"
            aria-label="Base Price"
          />
        </div>

        {/* Quantity Input */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-semibold mb-2"
          >
            Үлдэгдэл тоо ширхэг
          </label>
          <div
            id="quantity"
            className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 text-black"
          >
            {sumOfSizesQuantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceQuantityForm;
