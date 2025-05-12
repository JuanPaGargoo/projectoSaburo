import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, CardBody, Image, Skeleton } from "@heroui/react";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { API_ENDPOINTS } from '../../constants/api';
import SizeSelectorModal from './SizeSelectorModal';

export default function ClothingCard({ id }) {
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
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

  const handleAddToCartClick = () => {
    setShowModal(true); // Mostrar el modal
  };

  const handleAddToCart = (size, quantity) => {
    console.log(`Added to cart: ${product.name}, Size: ${size}, Quantity: ${quantity}`);
  };

  if (!product) {
    return (
      <Card className="py-1 w-[220px] h-[375px] select-none flex flex-col">
        <CardBody className="overflow-visible flex flex-col justify-between h-full">
          <Skeleton className="rounded-lg h-[230px]">
            <div className="h-full rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3 mt-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="py-1 w-[220px] h-[375px] select-none flex flex-col">
      <CardBody className="overflow-visible flex flex-col justify-between">
        <div className="relative overflow-hidden rounded-xl mb-3">
          {/* Imagen del producto */}
          <Image
            alt={product.name}
            className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            src={`${API_ENDPOINTS.IMAGES}/${product.frontImage}`}
            height={230}
            width={200}
            onClick={handleImageClick} // Permite clic incluso si está agotado
          />
        </div>
        <p className="text-tiny font-bold mb-2">{product.name}</p>
        {/* Precio o mensaje de "Sold Out" */}
        <small className="text-default-500">
          {product.soldOut ? (
            <span className="text-red-600 font-bold">Sold Out</span>
          ) : product.discount > 0 ? (
            <div className="flex items-center gap-2">
              {/* Precio original subrayado */}
              <span className="line-through text-gray-500">
                ${parseFloat(product.price).toFixed(2)}
              </span>
              {/* Precio con descuento */}
              <span className="text-red-600 font-bold">
                ${parseFloat(product.price - (product.price * product.discount) / 100).toFixed(2)}
              </span>
            </div>
          ) : (
            // Precio normal si no hay descuento
            `$${parseFloat(product.price).toFixed(2)}`
          )}
        </small>
        <div className="flex justify-between items-center mt-3">
          <Button
            className="w-[70%] text-white font-bold"
            color="primary"
            size="sm"
            onClick={handleAddToCartClick}
            disabled={product.soldOut} // Deshabilita el botón si está agotado
          >
            Add to cart
          </Button>
          <div
            onClick={!product.soldOut ? toggleFavorite : undefined} // Deshabilita clic si está agotado
            onMouseEnter={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className={`cursor-pointer transition-transform ${
              isClicked ? "transform scale-110" : ""
            }`}
          >
            {isFavorite || isHovered ? (
              <SolidHeartIcon
                className={`h-7 w-7 ${
                  isHovered ? "text-cafeAvellana" : "text-cafeCacao"
                }`}
              />
            ) : (
              <OutlineHeartIcon className="h-7 w-7 text-cafeCacao" />
            )}
          </div>
        </div>
      </CardBody>

      {/* Modal */}
      {showModal && (
        <SizeSelectorModal
          product={product}
          onClose={() => setShowModal(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </Card>
  );
}