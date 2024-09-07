import React, { useState } from 'react';
import { Container } from './assets/Container';

import { StarRating } from './assets/StarRating';

export const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    { name: 'Saraa', rating: 4.5, comment: 'Ваав материал ёстой гоё байна' },
    { name: 'Saraa', rating: 4.5, comment: '🔥🔥🔥' },
    // More reviews...
  ]);

  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = () => {
    const newReview = { name: 'User', rating: newRating, comment: newComment };
    setReviews([...reviews, newReview]);
    setNewRating(0);
    setNewComment('');
  };

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Container className="bg-white">
      <div className="w-full flex">
        <div className=" w-1/2"></div>
        <div className=" w-1/2 flex flex-col items-start">
          {/* Review Form */}
          <div className="w-full mt-4 p-4 border border-dashed border-gray-300 rounded-lg">
            <div className="mb-3">
              <label className="text-black">Одоор үнэлэх:</label>
              <StarRating rating={newRating} onClick={setNewRating} />
            </div>
            <div className="mb-3">
              <label className="text-black">Сэтгэгдэл үлдээх:</label>
              <textarea
                className="w-full h-20 p-2 border border-gray-300 rounded-lg"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Энд бичнэ үү"
              />
            </div>
            <button
              className="bg-[#2563EB] text-white py-2 px-4 rounded-lg"
              onClick={handleSubmit}
            >
              Үнэлэх
            </button>
          </div>
          <div className="w-full mt-4">
            {reviews.map((review, index) => (
              <div key={index} className="mb-4 pb-2 border-b border-gray-300">
                <strong className="text-black">{review.name}</strong>
                <StarRating
                  rating={Math.round(review.rating)}
                  onClick={() => {}}
                />
                <p className="text-black">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
