import React from "react";

function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 w-16 h-16 bg-cafeCacao text-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-cafeAvellana transition"
    >
      IA
    </button>
  );
}

export default FloatingButton;