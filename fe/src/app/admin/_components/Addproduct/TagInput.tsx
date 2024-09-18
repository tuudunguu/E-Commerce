// components/TagInput.tsx
import React, { useState } from 'react';

type TagInputProps = {
  suggestedTags: string[];
  onAddTag: (tag: string) => void;
};

const TagInput = ({ suggestedTags, onAddTag }: TagInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      onAddTag(inputValue.trim());
      setInputValue(''); // Clear input field after adding a tag
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-lg bg-white w-full max-w-full">
      <label className="block text-gray-700 font-medium mb-2">Таг</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full p-2 border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100"
        placeholder="Таг нэмэх..."
        aria-label="Add Tag"
      />

      {/* Suggested Tags */}
      <div className="mt-2 text-gray-600">
        Санал болгох: {suggestedTags.join(' , ')}
      </div>
    </div>
  );
};

export default TagInput;
