import React, { useState } from "react";
import { ArrowRightIcon, TagIcon } from "@heroicons/react/24/solid";
import {Button, ButtonGroup} from "@heroui/react";


function OrderSummary({ subtotal, discountRate = 0.2, deliveryFee = 15 }) {
  const discount = subtotal * discountRate;
  const total = subtotal - discount + deliveryFee;
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border w-full max-w-md">

      <h1 className="font-bold text-xl text-cafeCacao mb-4">Order Summary</h1>

      <div className="grid grid-cols-2 gap-2 text-lg">
        <span>Subtotal</span>
        <span className="text-right font-semibold">${subtotal}</span>

        <span>Discount (-{discountRate * 100}%)</span>
        <span className="text-right text-red-500 font-semibold">-${discount.toFixed(2)}</span>

        <span>Delivery Fee</span>
        <span className="text-right font-semibold">${deliveryFee}</span>

        <hr className="col-span-2 my-2" />

        <span className="font-semibold text-lg">Total</span>
        <span className="text-right font-bold text-xl">${total.toFixed(2)}</span>
      </div>

      <div className="flex items-center bg-gray-100 rounded-full p-2 mt-4">
        <TagIcon className="h-5 w-5 text-gray-400 mx-2" />
        <input
          type="text"
          placeholder="Add promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="bg-transparent flex-grow outline-none text-gray-600 placeholder-gray-400"
        />
        <button className="bg-cafeCacao text-white px-4 py-2 rounded-full">Apply</button>
      </div>


      <button className="bg-cafeCacao text-white w-full flex items-center justify-center gap-2 py-3 rounded-full text-lg mt-4">
        Go to Checkout <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default OrderSummary;
