import React from 'react';

type ProductFormProps = {
  productName: string;
  additionalInfo: string;
  productCode: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInfoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const ProductForm = ({
  productName,
  additionalInfo,
  productCode,
  onNameChange,
  onInfoChange,
}: ProductFormProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-lg bg-white w-full max-w-lg">
      {/* Product Name */}
      <div>
        <label
          htmlFor="productName"
          className="block text-gray-700 font-medium"
        >
          Бүтээгдэхүүний нэр
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={onNameChange}
          className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Нэр"
          aria-label="Product Name"
        />
      </div>

      {/* Additional Information */}
      <div>
        <label
          htmlFor="additionalInfo"
          className="block text-gray-700 font-medium"
        >
          Нэмэлт мэдээлэл
        </label>
        <textarea
          id="additionalInfo"
          value={additionalInfo}
          onChange={onInfoChange}
          className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
          aria-label="Additional Information"
          rows={4}
        />
      </div>

      {/* Product Code (Static) */}
      <div>
        <label
          htmlFor="productCode"
          className="block text-gray-700 font-medium"
        >
          Барааны код
        </label>
        <input
          type="text"
          id="productCode"
          value={productCode}
          disabled
          className="mt-1 p-2 block w-full border rounded-md border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
          aria-label="Product Code"
        />
      </div>
    </div>
  );
};

export default ProductForm;
