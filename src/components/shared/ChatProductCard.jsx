import React from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../constants/api"; // Importa las constantes de la API

function ChatProductCard({ product }) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/product", { state: { id: product.id } }); // Navega a la sección del producto
    window.scrollTo({ top: 0 }); // Desplaza hacia arriba
  };

  return (
    <div
      className="border w-1/3 rounded-lg p-4 shadow-md text-sm bg-white flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-4"
      onClick={handleImageClick} // Maneja el clic en todo el contenedor
    >
      {/* Imagen del producto */}
      <div className="relative overflow-hidden rounded-md mb-2">
        <img
          src={`${API_ENDPOINTS.IMAGES}/${product.frontImage}`} // Construye la URL completa
          alt={product.name}
          className="w-full h-32 object-cover rounded-md transition-transform duration-300 hover:scale-110"
        />
      </div>
      {/* Nombre del producto */}
      <h3 className="font-semibold text-sm flex-grow">{product.name}</h3>
      {/* Precio del producto */}
      <p className="text-sm text-gray-500 mt-auto">Precio: ${product.price}</p>
    </div>
  );
}

export default ChatProductCard;