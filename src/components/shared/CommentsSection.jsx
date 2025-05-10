import React, { useState, useEffect } from "react";
import { div } from "framer-motion/client";
import CommentCard from "./CommentCard";
import { API_ENDPOINTS } from "../../constants/api";

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomComments = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.RANDOM_COMMENTS);
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error("Failed to fetch random comments");
        }
      } catch (error) {
        console.error("Error fetching random comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomComments();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-5 mt-8">
      <h3 className="font-abrilFatface text-cafeCacao text-4xl ml-16">
        Our Happy Customers
      </h3>
      <div className="w-full h-[220px] flex items-center justify-center gap-8">
        {loading ? (
          <p>Loading comments...</p>
        ) : comments.length > 0 ? (
          comments.map((comment, index) => (
            <CommentCard
              key={index}
              stars={comment.stars}
              name={comment.name}
              text={comment.text} // Asegúrate de que el campo sea "text" en la API
            />
          ))
        ) : (
          <p className="text-gray-500">No comments available.</p>
        )}
      </div>
    </div>
  );
}

export default CommentsSection;