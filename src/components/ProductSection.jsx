import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@heroui/react'; 
import productos from '../data/productos.json';
import ImagesProductSection from './ImagesProductSection';
import NavBarProductSection from './NavBarProductSection';
import ProductDetails from './ProductDetails';
import RatingAndReviews from './RatingAndReviews';
import AlsoLikeSection from './AlsoLikeSection';

function ProductSection() {
  const location = useLocation();
  const { id } = location.state || {}; 
  const producto = productos.find((producto) => producto.id === id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSection, setSelectedSection] = useState('details');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'details':
        return <ProductDetails />;
      case 'reviews':
        return <RatingAndReviews />;
      default:
        return <ProductDetails />;
    }
  };

  return (
    <div className='flex flex-col items-center w-[100%] m-auto mt-10'>
      <div className='flex flex-row w-[90%] justify-center gap-10'>
        <ImagesProductSection producto={producto} />
        <div className='w-[50%]'>
          <div className='pb-4 border-b-2 border-grey-200'>
            <h2 className='text-cafeCacao text-3xl font-bold mt-3'>{producto.name}</h2>
            <p className='text-cafeAvellana text-2xl font-bold mt-3'>${producto.price}</p>
            <p className='w-[90%] text-lg mt-3 text-gray-600'>{producto.description}</p>
          </div>
          <p className='w-[90%] text-medium mt-3 text-gray-500'>Choose Size</p>
          <div className='flex flex-row gap-5 mt-5 border-b-2 pb-7 border-grey-200'>
            {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
              <button
                key={size}
                className={`w-[100px] h-[40px] rounded-3xl transition-colors duration-300 ${
                  selectedSize === size
                    ? 'bg-cafeCacao text-white'
                    : 'bg-gray-200 text-gray-500 hover:bg-cafeAvellana hover:text-white'
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className='flex flex-row items-center mt-5 gap-7'>
            <div className='flex flex-row items-center'>
              <button
                className='w-[40px] h-[40px] bg-gray-200 text-gray-500 rounded-full hover:bg-cafeCacao hover:text-white transition-colors duration-300'
                onClick={handleDecrease}
              >
                -
              </button>
              <p className='mx-4 text-lg'>{quantity}</p>
              <button
                className='w-[40px] h-[40px] bg-gray-200 text-gray-500 rounded-full hover:bg-cafeCacao hover:text-white transition-colors duration-300'
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <Button className='w-[60%] h-[50px] bg-cafeCacao text-white rounded-3xl'>Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className='w-[80%] mt-10 flex flex-col items-center pb-7 border-b-2 border-grey-200'>
        <NavBarProductSection onSelectSection={setSelectedSection} />
        {renderSection()}
      </div>
      <AlsoLikeSection />
    </div>
  );
}

export default ProductSection;