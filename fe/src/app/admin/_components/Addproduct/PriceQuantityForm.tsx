import React from 'react';

type PriceQuantityFormProps = {
  price: string;
  quantity: string;
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PriceQuantityForm = ({
  price,
  quantity,
  onPriceChange,
  onQuantityChange,
}: PriceQuantityFormProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Price Input */}
        <div>
          <label
            htmlFor="price"
            className="block text-gray-700 font-medium mb-2"
          >
            Үндсэн үнэ
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={onPriceChange}
            className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
            placeholder="Үндсэн үнэ"
            aria-label="Base Price"
          />
        </div>

        {/* Quantity Input */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-medium mb-2"
          >
            Үлдэгдэл тоо ширхэг
          </label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={onQuantityChange}
            className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
            placeholder="Үлдэгдэл тоо ширхэг"
            aria-label="Quantity in Stock"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceQuantityForm;
