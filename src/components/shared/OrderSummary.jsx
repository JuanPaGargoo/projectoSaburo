import React, { useState, useEffect } from "react";
import { ArrowRightIcon, TagIcon } from "@heroicons/react/24/solid";
import { Button, Alert } from "@heroui/react";
import axios from "axios";

function OrderSummary({ subtotal, discountRate = 0, deliveryFee = 15 }) {
  const [promoCode, setPromoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [appliedDiscountRate, setAppliedDiscountRate] = useState(discountRate); 

  const discount = (subtotal * appliedDiscountRate).toFixed(2);
  const total = (subtotal - parseFloat(discount) + deliveryFee).toFixed(2);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/api/paypal/create-order", {
        amount: total,
      });

      const { approvalUrl } = response.data;

      window.location.href = approvalUrl;
    } catch (error) {
      console.error("Error al crear orden de pago:", error);
      setErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyPromoCode = () => {
    if (promoCode.toLowerCase() === "saburo") {
      setAppliedDiscountRate(0.1); 
    } else {
      setAppliedDiscountRate(0); 
    }
  };

  useEffect(() => {
    if (errorAlert) {
      const timer = setTimeout(() => setErrorAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorAlert]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border w-full max-w-lg relative">
      {errorAlert && (
        <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            color="danger"
            title="Error"
            description="Hubo un problema al iniciar el pago."
            variant="faded"
          />
        </div>
      )}

      <h1 className="font-bold text-xl text-cafeCacao mb-4">Order Summary</h1>

      <div className="grid grid-cols-2 gap-2 text-lg">
        <span>Subtotal</span>
        <span className="text-right font-semibold">${subtotal.toFixed(2)}</span>

        <span>Discount (-{(appliedDiscountRate * 100).toFixed(0)}%)</span>
        <span className="text-right text-red-500 font-semibold">-${discount}</span>

        <span>Delivery Fee</span>
        <span className="text-right font-semibold">${deliveryFee.toFixed(2)}</span>

        <hr className="col-span-2 my-2" />

        <span className="font-semibold text-lg">Total</span>
        <span className="text-right font-bold text-xl">${total}</span>
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
        <Button
          className="bg-cafeCacao text-white px-4 py-2 rounded-full"
          onClick={handleApplyPromoCode}
        >
          Apply
        </Button>
      </div>

      <Button
        onClick={handleCheckout}
        className="bg-cafeCacao text-white w-full flex items-center justify-center gap-2 py-7 rounded-full text-lg mt-4"
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Go to Checkout"}
        <ArrowRightIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}

export default OrderSummary;