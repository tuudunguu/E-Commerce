import React from 'react';

type StarRatingProps = {
  rating: number;
  onClick: (value: number) => void;
};

export const StarRating = ({ rating, onClick }: StarRatingProps) => {
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
