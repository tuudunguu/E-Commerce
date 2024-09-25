'use client';

import { OnlyProduct } from '@/components/OnlyProduct';
import { RelatedProducts } from '@/components/RelatedProducts';
import { ReviewComponent } from '@/components/ReviewComponent';
import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/Footer';

export default function () {
  const [showReview, setShowReview] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [newRating, setNewRating] = useState(3);
  const [newComment, setNewComment] = useState('');
  const [reviews, setReviews] = useState([
    { name: 'Saraa', rating: 4.5, comment: 'Ваав материал ёстой гоё байна' },
    { name: 'Saraa', rating: 4.5, comment: '🔥🔥🔥' },
  ]);

  useEffect(() => {
    if (reviews.length > 0) {
      const avgRating =
        reviews.reduce((acc, review) => acc + review.rating, 0) /
        reviews.length;
      setAverageRating(avgRating);
    } else {
      setAverageRating(0); // Handles empty review case
    }
  }, [reviews]);

  const handleSubmit = () => {
    if (newRating === 0 || newComment.trim() === '') {
      console.log('Please provide a valid rating and comment');
      return;
    }
    const newReview = { name: 'User', rating: newRating, comment: newComment };
    setReviews([...reviews, newReview]);
    setNewRating(0); // Reset rating
    setNewComment(''); // Reset comment
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
