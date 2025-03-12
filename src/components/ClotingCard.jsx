import { useState } from 'react';
import { Card, Button, CardBody, Image } from "@heroui/react";
import camisa from '../images/Clothes/camisetaCalculatorBlancoArenaFrontal.jpg';
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

export default function ClothingCard() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the click state after 200ms
  };

  return (
    <Card className="py-1 w-[220px]">
      <CardBody className="overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl mb-3"
          src={camisa}
          height={250}
          width={200}
        />
        <p className="text-tiny font-bold mb-2">Camiseta Calculator Blanco Arena</p>
        <small className="text-default-500">$2500</small>
        <div className="flex justify-between items-center mt-3">
          <Button className="w-[70%] text-white" color="primary" size="sm">
            Add to cart
          </Button>
          <div
            onClick={toggleFavorite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
