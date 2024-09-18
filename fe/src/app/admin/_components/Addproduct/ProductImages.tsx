// components/ProductImages.tsx
import React from 'react';

type ProductImagesProps = {
  images: string[];
  onAddImage: () => void;
};

const ProductImages = ({ images, onAddImage }: ProductImagesProps) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full max-w-full">
      {/* Label */}
      <label className="block text-gray-700 font-medium mb-4">
        Бүтээгдэхүүний зураг
      </label>

      {/* Images Grid */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-24 h-24 border-2 border-dashed border-gray-300 flex justify-center items-center rounded-md"
          >
            {image ? (
              <img
                src={image}
                alt={`product image ${index + 1}`}
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v.01M12 12v7m-4-4h8M5 12H4.5m14.5 0H19M3 16l6-6 3 3 4-4 5 5"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}

        {/* Add Image Button */}
        <button
          onClick={onAddImage}
          className="w-24 h-24 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300"
          aria-label="Add Image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m7-7H5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
