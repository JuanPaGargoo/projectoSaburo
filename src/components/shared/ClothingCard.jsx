import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, CardBody, Image } from "@heroui/react";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { API_ENDPOINTS } from '../../constants/api';

export default function ClothingCard({ id }) {
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.PRODUCT_BY_ID(id));
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); 
  }; 

  const handleImageClick = () => {
    navigate('/product', { state: { id } }); 
    window.scrollTo({ top: 0 });
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="py-1 w-[220px] h-[375px] select-none">
      <CardBody className="overflow-visible">
        <div className="relative overflow-hidden rounded-xl mb-3">
          <Image
            alt={product.name}
            className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            src={`${API_ENDPOINTS.IMAGES}/${product.frontImage}`}
            height={230}
            width={200}
            onClick={handleImageClick}
          />
        </div>
        <p className="text-tiny font-bold mb-2">{product.name}</p>
        <small className="text-default-500"> ${parseFloat(product.price).toFixed(2)}</small>
        <div className="flex justify-between items-center mt-3">
          <Button className="w-[70%] text-white font-bold" color="primary" size="sm">
            Add to cart
          </Button>
          <div
            onClick={toggleFavorite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
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