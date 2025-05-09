import React from 'react';
import CommentCard from './CommentCard';
import { Button } from '@heroui/react';
import '../../styles/RatingAndReviews.css';

function RatingAndReviews() {
  return (
    <div>
      <div className="grid-container">
        <CommentCard stars={5} name="Juan" message="Excelente producto! Superó todas mis expectativas. La calidad es impresionante y el servicio al cliente fue excepcional. Definitivamente lo recomendaría a mis amigos y familiares." />
        <CommentCard stars={4} name="Maria" message="Muy bueno, pero puede mejorar. El producto es de buena calidad, pero creo que podría ser un poco más duradero. Aun así, estoy bastante satisfecha con mi compra." />
        <CommentCard stars={3} name="Pedro" message="Regular, esperaba más. El producto cumple con su función, pero no es tan bueno como esperaba. Hay algunos detalles que podrían mejorarse." />
        <CommentCard stars={5} name="Ana" message="Me encantó, lo recomiendo! Este producto es simplemente increíble. La calidad es excelente y el diseño es muy bonito. Estoy muy contenta con mi compra." />
        <CommentCard stars={4} name="Luis" message="Buen producto, satisfecho. El producto es de buena calidad y cumple con lo prometido. Sin embargo, creo que el precio es un poco alto para lo que ofrece." />
        <CommentCard stars={2} name="Carlos" message="No cumplió mis expectativas. El producto no es lo que esperaba. La calidad es baja y no funciona como debería. No lo recomendaría." />
        <CommentCard stars={5} name="Laura" message="Increíble, lo volvería a comprar! Este producto es fantástico. La calidad es excelente y el servicio al cliente fue muy bueno. Definitivamente lo volvería a comprar." />
        <CommentCard stars={3} name="Sofia" message="Está bien, pero tiene detalles. El producto es aceptable, pero tiene algunos detalles que podrían mejorarse. No estoy completamente satisfecha con mi compra." />
        <CommentCard stars={4} name="Miguel" message="Buen producto, buena calidad. Estoy satisfecho con mi compra. El producto es de buena calidad y cumple con lo prometido. Lo recomendaría." />
      </div>
      <div className="button-container">
        <Button radius='full' className='mt-2 px-20 bg-white50 border-2 border-cafeAvellana text-cafeAvellana'>Load more Reviews</Button>
      </div>
    </div>
  );
}

export default RatingAndReviews;
