"use client";
import { FC, useEffect } from "react";
import axios from "axios";
import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const cart = useCart();
  const items = cart.items;
  const removeAll = cart.removeAll;

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed 🙏");
      removeAll();
    }
    if (searchParams.get("cancelled")) {
      toast.error("Something went wrong ⚠️");
    }
  }, [searchParams, removeAll]);

  const totalCost = items.reduce((total, item) => {
    return total + item.cartCount! * Number(item.price);
  }, 0);

  const eachPriceArray = items.map(
    (item) => item.cartCount! * Number(item.price),
  );

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        items,
        totalCost,
      },
    );
    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col items-start justify-between space-y-4 border-t border-gray-200 pt-4">
          {items.map((item) => {
            const eachPrice = item.cartCount! * Number(item.price);
            return (
              <>
                <div
                  key={item.id}
                  className="flex w-full flex-row items-center justify-between gap-10"
                >
                  <p className="">{item.name}</p>
                  <Currency value={eachPrice} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalCost} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={onCheckout}
        className="mt-6 w-full"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
