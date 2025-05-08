import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, CardBody, Image } from "@heroui/react";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

export default function ClothingCard({ id, name, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); 
  };

  const handleImageClick = () => {
    navigate('/product', { state: { id } }); 
    window.scrollTo({ top: 0});
  };

  return (
    <Card className="py-1 w-[220px] select-none">
      <CardBody className="overflow-visible">
        <div className="relative overflow-hidden rounded-xl mb-3">
          <Image
            alt="Card background"
            className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            src={image}
            height={250}
            width={200}
            onClick={handleImageClick}
          />
        </div>
        <p className="text-tiny font-bold mb-2">{name}</p>
        <small className="text-default-500">${price}</small>
        <div className="flex justify-between items-center mt-3">
          <Button className="w-[70%] text-white font-bold" color="primary" size="sm">
            Add to cart
          </Button>
          <div
            onClick={toggleFavorite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)} // Cambiado de onMouseLeave a onMouseOut
            className={`cursor-pointer transition-transform ${isClicked ? 'transform scale-110' : ''}`}
          >
            {isFavorite || isHovered ? (
              <SolidHeartIcon className={`h-7 w-7 ${isHovered ? 'text-cafeAvellana' : 'text-cafeCacao'}`} />
            ) : (
              <OutlineHeartIcon className="h-7 w-7 text-cafeCacao" />
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
