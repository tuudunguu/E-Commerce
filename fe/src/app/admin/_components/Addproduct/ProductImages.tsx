'use client'; 

import React from 'react';
import { api } from '@/lib';

type ProductImagesProps = {
  images: string[]; // Array of image URLs
  setImages: (images: string[]) => void; // Function to update the images array
  Authorization: string | null; // Authorization token from parent component
};

const ProductImages = ({
  images,
  setImages,
  Authorization,
}: ProductImagesProps) => {
  // Function to handle image upload to Cloudinary (using axios)
  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('image', file);

      try {
        // Ensure Authorization is available
        if (!Authorization) {
          console.error('Authorization token is missing');
          return;
        }

        // Use axios (via api) to upload the image to Cloudinary
        const response = await api.post(
          'http://localhost:3001/upload',
          formData,
          {
            headers: {
              Authorization: `Bearer ${Authorization}`,
              'Content-Type': 'multipart/form-data', // Set multipart for file upload
            },
          }
        );

        const imageUrl = response.data.secure_url;

        // Add the returned image URL to the images array
        setImages([...images, imageUrl]);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full h-full">
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
            <img
              src={image}
              alt={`Product ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Add Image Button */}
        <input
          type="file"
          onChange={handleAddImage} // Trigger Cloudinary upload and update state
          className="w-24 h-24 flex justify-center items-center bg-gray-200 hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default ProductImages;
