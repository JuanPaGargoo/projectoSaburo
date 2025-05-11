import React, { useState, useEffect } from 'react';
import { Button } from "@heroui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Alert } from "@heroui/react"; 
import { useCart } from '../../context/CartContext';

export default function SizeSelectorModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("info");

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Deshabilitar scroll
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    if (!isLocked) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (!isLocked && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setAlertMessage("Por favor selecciona una talla.");
      setAlertType("warning");
      setAlertVisible(true);
      return;
    }

    addToCart(product, selectedSize, quantity);

    setAlertMessage("¡Producto agregado al carrito!");
    setAlertType("success");
    setAlertVisible(true);

    setIsLocked(true);

    setTimeout(() => {
      setAlertVisible(false);
      setIsLocked(false); 
      onClose();
    }, 800); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {alertVisible && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            color={alertType}
            title={alertType === "success" ? "Éxito" : "Error"}
            description={alertMessage}
            variant="faded"
          />
        </div>
      )}

      <div className="bg-white rounded-3xl p-6 w-[400px] shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          disabled={isLocked} 
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl mb-8 text-left">Elige una talla</h2>
        <div className="flex justify-center gap-2 mb-4">
          {["Small", "Medium", "Large", "X-Large"].map((size) => (
            <button
              key={size}
              className={`px-4 py-2 rounded-full border ${
                selectedSize === size
                  ? "bg-cafeCacao text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleSizeClick(size)}
              disabled={isLocked} 
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center justify-center gap-2 py-1.5 bg-gray-200 rounded-full">
            <button
              className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleDecrement}
              disabled={isLocked} 
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleIncrement}
              disabled={isLocked} 
            >
              +
            </button>
          </div>
          <Button
            className="w-full bg-cafeCacao text-white py-2 rounded-full font-bold"
            onClick={handleAddToCart}
            disabled={isLocked} 
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
}