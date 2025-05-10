import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../context/AuthContext"; // Importar AuthContext
import { API_ENDPOINTS } from "../../constants/api"; // Importar rutas de la API

export default function AddCommentModal({ onClose, onSubmit, productId }) {
  const [stars, setStars] = useState(0);
  const [text, setText] = useState(""); // Cambiar "comment" a "text"
  const { user } = useAuth(); // Obtener el usuario autenticado

  const handleStarClick = (value) => {
    setStars(value);
  };

  const handleSubmit = async () => {
    if (stars > 0 && text.trim()) {
      const commentData = {
        stars,
        text, // Usar "text" en lugar de "comment"
        name: user?.name || "Anónimo", // Usar el nombre del usuario o "Anónimo"
        productId, // Asociar el comentario al producto
      };

      try {
        const response = await fetch(API_ENDPOINTS.COMMENTS, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        });

        if (response.ok) {
          const newComment = await response.json();
          onSubmit(newComment); // Pasar el nuevo comentario al componente padre
          onClose();
        } else {
          alert("Failed to submit the comment. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please provide a rating and a comment.");
    }
  };

  // Disable scroll and compensate for scrollbar width
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = ""; // Reset scroll
      document.body.style.paddingRight = ""; // Reset padding
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 w-[400px] shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-xl text-gray-500 mb-4 text-left">Add Your Comment</h2>
        <div className="flex justify-start gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`text-2xl ${
                stars >= value ? "text-cafeCacao" : "text-gray-300"
              }`}
              onClick={() => handleStarClick(value)}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          className="w-full h-24 p-2 border rounded-lg mb-4 resize-none focus:outline-none focus:border-cafeCacao"
          placeholder="Write your comment here..."
          value={text} // Cambiar "comment" a "text"
          onChange={(e) => setText(e.target.value)} // Cambiar "comment" a "text"
        />
        <Button
          className="w-full bg-cafeCacao text-white py-2 rounded-full font-bold"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}