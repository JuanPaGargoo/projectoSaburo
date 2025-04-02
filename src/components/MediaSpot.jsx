import React from 'react';
import mediaSpotImage from '../images/media_spotNoBG.png';
import '../styles/MediaSpot.css';
import { Button } from "@heroui/react";
import doodleArt from '../images/doodleArt.png';
import isotipo from '../icons/isotipo.png';

function MediaSpot() {
  return (
    <section id="media-spot" className="media-spot flex flex-col sm:flex-row items-center justify-between">
      <div className="media-spot-text">
        {/* Isotipo en la esquina superior derecha */}
        <img src={isotipo} alt="Isotipo" className="isotipo" />
        <h1 className="text-cafe-cacao text-9xl sm:text-5xl sm:text-left max-w-96">YOUR STYLE OUR HAND</h1>
        <p className='max-w-96'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <Button color="primary" id="heroBtn" radius='full' className='px-16'>Shop Now</Button>
      </div>
      {/* Imagen de fondo (doodleArt) */}
      <img src={doodleArt} alt="Doodle Art" className="doodle-art" />
      {/* Imagen principal */}
      <img src={mediaSpotImage} alt="Media" className="media-spot-image" />
    </section>
  );
}

export default MediaSpot;