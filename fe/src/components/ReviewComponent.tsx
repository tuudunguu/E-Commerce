import React, { Dispatch, SetStateAction, useState } from 'react';
import { Container } from './assets/Container';

import { StarRating } from './assets/StarRating';

type ReviewComponentProps = {
  showReview: boolean;
  reviews: {
    name: string;
    rating: number;
    comment: string;
  }[];
  setReviews: Dispatch<
    SetStateAction<
      {
        name: string;
        rating: number;
        comment: string;
      }[]
    >
  >;
  setNewRating: (value: number) => void;

  newRating: number;
  newComment: string;
  setNewComment: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
};

export const ReviewComponent = ({
  showReview,
  reviews,
  setReviews,
  setNewRating,
  newRating,
  newComment,
  setNewComment,
  handleSubmit,
}: ReviewComponentProps) => {
  return (
    <Container className="bg-[#f6f6f6]">
      <div className="w-full flex ">
        <div className=" w-1/2"></div>
        <div
          className={
            !showReview ? 'hidden' : ' w-1/2 flex flex-col items-start'
          }
        >
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
