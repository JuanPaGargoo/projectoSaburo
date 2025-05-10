import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { Button } from "@heroui/react";
import AddCommentModal from "./AddCommentModal";
import { API_ENDPOINTS } from "../../constants/api";
import "../../styles/RatingAndReviews.css";

function RatingAndReviews({ productId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.COMMENTS_BY_PRODUCT(productId));
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchComments();
    }
  }, [productId]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mt-3 flex justify-between items-center  w-full">
        <h2 className="text-gray-400 text-xl">Rating & Reviews</h2>
        <Button
          onClick={() => setIsModalOpen(true)}
          radius="full"
          className="px-6 py-2 bg-cafeCacao text-white hover:bg-opacity-90 transition"
        >
          Add Comment
        </Button>
      </div>
      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length > 0 ? (
        <div className="w-full flex flex-row flex-wrap gap-4 mt-4">
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              stars={comment.stars}
              name={comment.name}
              text={comment.text}
              width="240px"
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No comments available for this product.</p>
      )}
      {isModalOpen && (
        <AddCommentModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddComment}
          productId={productId}
        />
      )}
    </div>
  );
}

export default RatingAndReviews;
