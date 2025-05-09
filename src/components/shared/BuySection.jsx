import React, { useEffect } from 'react';
import BuyCard from './BuyCard';
import { useCart } from '../../context/CartContext';

const BuySection = ({ onTotalChange }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    const newTotal = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    onTotalChange(newTotal);
  }, [cart, onTotalChange]);

  if (cart.length === 0) return (
    <div className='px-[5%] flex items-center justify-center gap-5 mb-8'>
      <p>Your cart is empty.</p>
    </div>
  );

  return (
    <div className='px-[5%] flex items-center justify-center gap-5 mb-8'>
      <div className='p-3 w-full h-full border-2 border-grey-200 rounded-xl max-h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
        {cart.map((product) => {
          if (!product || !product.id || !product.name || !product.price || !product.frontImage) {
            console.error("Invalid product data:", product);
            return <p key={product?.id || Math.random()} className="text-red-500">Error: Invalid product data</p>;
          }

          return (
            <BuyCard
              key={`${product.id}-${product.size}`}
              product={product}
              initialQuantity={product.quantity}
              size={product.size}
              onQuantityChange={(id, newQuantity) => updateQuantity(id, product.size, newQuantity)}
              onRemove={(id) => removeFromCart(id, product.size)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BuySection;