import { useState } from "react";
import OrderSummary from "../shared/OrderSummary";
import BuySection from "../shared/BuySection";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Link } from 'react-router-dom';

function ShoppingMain() {
  const [subtotal, setSubtotal] = useState(0);

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