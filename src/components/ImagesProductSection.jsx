import React, { useState } from 'react';
import '../styles/imagesProductSection.css';

function ImagesProductSection({ producto }) {
  const [selectedImage, setSelectedImage] = useState(producto.images.front);

  return (
    <div className="images-grid">
      <div className="image-container image-front" onClick={() => setSelectedImage(producto.images.front)}>
        <img src={producto.images.front} alt={producto.name} />
      </div>
      <div className="image-container image-back" onClick={() => setSelectedImage(producto.images.back)}>
        <img src={producto.images.back} alt={producto.name} />
      </div>
      <div className="image-container image-model" onClick={() => setSelectedImage(producto.images.model)}>
        <img src={producto.images.model} alt={producto.name} />
      </div>
      <div className="image-container image-view">
        <img src={selectedImage} alt={producto.name} />
      </div>
    </div>
  );
}

export default ImagesProductSection;