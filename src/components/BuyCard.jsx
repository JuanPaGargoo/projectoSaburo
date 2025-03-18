import { TrashIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from 'react';

function BuyCard({ product, initialQuantity, size, onQuantityChange, onRemove }) {
  const { id, name, price, images } = product;
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    onQuantityChange(id, quantity); 
  }, [quantity, id, onQuantityChange]);

  const handleIncrement = () => {
    setQuantity(q => q + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const handleRemove = () => {
    onRemove(id); 
  };

  return (
    <div className="flex items-center justify-between w-full h-full p-4 bg-white rounded-lg shadow-sm">
      <div className="h-48 flex-shrink-0">
        <img src={images.front} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>

      <div className="flex flex-col flex-grow px-4">
        <p className="text-lg font-bold text-cafeCacao">{name}</p>
        <p className="text-sm text-gray-500">Size: <span className="text-gray-700">{size}</span></p>
        <p className="text-xl font-bold text-cafeCacao">${price}</p>
      </div>

      <div className="flex flex-col items-end space-y-4">
        <TrashIcon 
          className="h-6 w-6 text-red-500 cursor-pointer transition"
          onClick={handleRemove}
        />

        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
          <button 
            onClick={handleDecrement} 
            className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 rounded-full"
          >
            −
          </button>
          <p className="px-3 text-lg">{quantity}</p>
          <button 
            onClick={handleIncrement} 
            className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 rounded-full"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyCard;
