import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import OrderSummary from "./OrderSummary";
import BuySection from "./BuySection";

function ShoppingMain() {
  const [subtotal, setSubtotal] = useState(0);

  return (
    <>
      <ShoppingCart />
      <div className="items-start justify-between gap-5 mt-8 pb-8 border-grey-200 mx-14" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <BuySection onTotalChange={setSubtotal} />
        <OrderSummary subtotal={subtotal} />
      </div>
    </>
  );
}

export default ShoppingMain;
