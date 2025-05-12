import React from "react";
import isotipo from "../../icons/isotipo.png"; // Importa la imagen como un módulo

function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 w-16 h-16 bg-white border-2 border-cafeCacao rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
    >
      <img
        src={isotipo} // Usa la variable importada
        alt="Isotipo"
        className="w-12 h-12" // Imagen más grande
      />
    </button>
  );
}

export default FloatingButton; 