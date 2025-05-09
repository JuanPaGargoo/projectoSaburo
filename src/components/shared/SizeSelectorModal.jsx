import React, { useState } from 'react';
import { Button } from "@heroui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCart } from '../../context/CartContext';

export default function SizeSelectorModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize, quantity); 
      onClose();
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 w-[400px] shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl mb-8 text-left">Choose Size</h2>
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
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <Button
            className="w-full bg-cafeCacao text-white py-2 rounded-full font-bold"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}