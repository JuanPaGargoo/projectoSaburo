import { useState } from "react";
import OrderSummary from "../shared/OrderSummary";
import BuySection from "../shared/BuySection";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import sadShoppingBag from '../../images/sadShoppingBag.png';

function ShoppingMain() {
  const [subtotal, setSubtotal] = useState(0);
  const { cart} = useCart();

  if (cart.length === 0) return (
    <div>
      <div className='px-[5%] flex items-center justify-center gap-5 my-32'>
        <img src={sadShoppingBag} alt="Empty Cart" className="w-[20%] h-[20%]" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mb-8">
        <h1 className="text-2xl font-bold text-cafeCacao">Tu carro esta vacio</h1>
        <p className="text-md text-gray-500 text-medium">Empieza a comprar <span className="text-cafeCacao font-bold underline"><Link to="/">aqui</Link></span></p>
      </div>
    </div>
  
  );

  return (
    <>
      <div className="mx-14 my-5">
          <Breadcrumbs>
              <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
              <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumbs>
      </div>
      <div className="items-start justify-between gap-5 mt-8 pb-8 border-grey-200 mx-14" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <BuySection onTotalChange={setSubtotal} />
        <OrderSummary subtotal={subtotal} />
      </div>
    </>
  );
}

export default ShoppingMain;