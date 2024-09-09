'use client';

import { OnlyProduct } from '@/components/OnlyProduct';
import { RelatedProducts } from '@/components/RelatedProducts';
import { ReviewComponent } from '@/components/ReviewComponent';
import { useState, useEffect } from 'react';

export default function () {
  const [showReview, setShowReview] = useState(false);

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const avgRating =
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    setAverageRating(avgRating);
  }, []);

  const [reviews, setReviews] = useState([
    { name: 'Saraa', rating: 4.5, comment: 'Ваав материал ёстой гоё байна' },
    { name: 'Saraa', rating: 4.5, comment: '🔥🔥🔥' },
  ]);

  const [newRating, setNewRating] = useState(3);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = () => {
    const newReview = { name: 'User', rating: newRating, comment: newComment };
    setReviews([...reviews, newReview]);
    setNewRating(0);
    setNewComment('');
    console.log('rating:', newRating);
  };

  return (
    <>
      <OnlyProduct
        setShowReview={setShowReview}
        showReview={showReview}
        averageRating={averageRating}
        setAverageRating={setAverageRating}
      />
      <ReviewComponent
        showReview={showReview}
        reviews={reviews}
        setReviews={setReviews}
        setNewRating={setNewRating}
        newRating={newRating}
        newComment={newComment}
        setNewComment={setNewComment}
        handleSubmit={handleSubmit}
      />
      <RelatedProducts />
    </>
  );
}
