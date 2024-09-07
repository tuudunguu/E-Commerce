import React from 'react';

export const StarRating = ({ rating, onClick }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => onClick(index + 1)} // Click to set rating
          style={{
            cursor: 'pointer',
            color: index < rating ? '#FFD700' : '#CCCCCC', // Highlight based on rating
            fontSize: '20px',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};
