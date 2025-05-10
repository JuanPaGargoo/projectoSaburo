import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Alert } from '@heroui/react'; 
import axios from 'axios';
import { API_ENDPOINTS } from '../../constants/api';
import ImagesProductSection from '../shared/ImagesProductSection';
import NavBarProductSection from '../shared/NavBarProductSection';
import ProductDetails from '../shared/ProductDetails';
import RatingAndReviews from '../shared/RatingAndReviews';
import '../../styles/productSection.css';
import useRandomProducts from '../../hooks/useRandomProducts';
import ProductDisplaySection from '../shared/ProductDisplaySection'; 
import { useCart } from '../../context/CartContext'; 

function ProductSection() {
  const location = useLocation();
  const { id } = location.state || {}; 
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSection, setSelectedSection] = useState('details');
  const randomProducts = useRandomProducts();
  const { addToCart } = useCart(); 

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("info");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProduct(null);
        setSelectedSize(null);
        setQuantity(1);

        const response = await axios.get(API_ENDPOINTS.PRODUCT_BY_ID(id));
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => setAlertVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertVisible]);

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

  const handleAddToCart = () => {
    if (!selectedSize) {
      setAlertMessage("Porfavor selecciona una talla");
      setAlertType("warning");
      setAlertVisible(true);
      return;
    }

    addToCart(product, selectedSize, quantity);

    setAlertMessage("Producto agregado al carrito");
    setAlertType("success");
    setAlertVisible(true);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'details':
        return <ProductDetails name={product.name} description={product.description} />;
      case 'reviews':
        return <RatingAndReviews productId={id} />;
      default:
        return <ProductDetails name={product.name} description={product.description} />;
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-col items-center w-[100%] m-auto mt-10 relative'>
      {alertVisible && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            color={alertType}
            title={alertType === "success" ? "Success" : "Cuidado"}
            description={alertMessage}
            variant="faded"
          />
        </div>
      )}

      <div className='flex flex-row w-[90%] justify-center gap-10'>
        <ImagesProductSection product={product} />
        <div className='w-[50%]'>
          <div className='pb-4 border-b-2 border-grey-200'>
            <h2 className='text-cafeCacao text-3xl font-bold mt-3'>{product.name}</h2>
            <p className='text-cafeAvellana text-2xl font-bold mt-3'>
              ${parseFloat(product.price).toFixed(2)}
            </p>
            <p
              className='w-[90%] h-[80px] text-md mt-3 pr-12 text-gray-600 overflow-y-auto'
            >
              {product.description}
            </p>
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
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 rounded-full hover:bg-cafeCacao hover:text-white transition-colors duration-300"
              >
                −
              </button>
              <p className="px-3 text-lg">{quantity}</p>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center text-lg text-gray-600 rounded-full hover:bg-cafeCacao hover:text-white transition-colors duration-300"
              >
                +
              </button>
            </div>
            <Button
              className='w-[60%] h-[50px] bg-cafeCacao text-white rounded-3xl'
              onClick={handleAddToCart} 
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className='w-[80%] mt-10 flex flex-col items-center pb-7 border-b-2 border-grey-200'>
        <NavBarProductSection onSelectSection={setSelectedSection} />
        {renderSection()}
      </div>
      <ProductDisplaySection title="You Might Also Like" products={randomProducts} showButton={true} />
    </div>
  );
}

export default ProductSection;