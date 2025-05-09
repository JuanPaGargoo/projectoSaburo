import React, { useState } from 'react';
import '../../styles/imagesProductSection.css';
import { API_ENDPOINTS } from '../../constants/api';

function ImagesProductSection({ product }) {
  if (!product) {
    return <p>Loading images...</p>; // Muestra un mensaje de carga mientras `product` no está disponible
  }

  const [selectedImage, setSelectedImage] = useState(product.frontImage);

  return (
    <div className="images-grid">
      <div className="image-container image-front" onClick={() => setSelectedImage(product.frontImage)}>
        <img src={`${API_ENDPOINTS.IMAGES}/${product.frontImage}`} alt={product.name} />
      </div>
      <div className="image-container image-back" onClick={() => setSelectedImage(product.backImage)}>
        <img src={`${API_ENDPOINTS.IMAGES}/${product.backImage}`} alt={product.name} />
      </div>
      <div className="image-container image-model" onClick={() => setSelectedImage(product.modelImage)}>
        <img src={`${API_ENDPOINTS.IMAGES}/${product.modelImage}`} alt={product.name} />
      </div>
      <div className="image-container image-view">
        <img src={`${API_ENDPOINTS.IMAGES}/${selectedImage}`} alt={product.name} />
      </div>
    </div>
  );
}

export default ImagesProductSection;