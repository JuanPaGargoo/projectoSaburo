import React, { useEffect, useState } from 'react';
import productos from '../data/productos.json';
import BuyCard from './BuyCard';

const BuySection = ({ onTotalChange }) => {
    const [selectedProducts, setSelectedProducts] = useState([
        { ...productos[9], quantity: 1 },
        { ...productos[10], quantity: 1 },
        { ...productos[11], quantity: 1 }
    ]);

    useEffect(() => {
        const newTotal = selectedProducts.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
        onTotalChange(newTotal);
    }, [selectedProducts, onTotalChange]);

    const handleQuantityChange = (id, newQuantity) => {
        setSelectedProducts(prev =>
            prev.map(prod => (prod.id === id ? { ...prod, quantity: newQuantity } : prod))
        );
    };

    const handleRemove = (id) => {
        setSelectedProducts(prev => prev.filter(prod => prod.id !== id));
    };

    return (
        <div className='px-[5%] flex items-center justify-center gap-5 mt-8 mb-8 border-grey-200'>
            <div className='p-3 w-full h-full flex-col items-center justify-center gap-8 border-2 border-grey-200 rounded-xl'>
                {selectedProducts.map((product) => (
                    <BuyCard 
                        key={product.id} 
                        product={product} 
                        initialQuantity={product.quantity}
                        size={'M'}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default BuySection;
