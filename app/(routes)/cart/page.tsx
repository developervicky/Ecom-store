"use client";
import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import { FC, useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";

interface CartPageProps {}

const CartPage: FC<CartPageProps> = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              {cart.items.length === 0 && <p>No Items added to cart </p>}
              <ul>
                {cart.items.map(
                  (item) =>
                    item?.cartCount! > 0 && (
                      <CartItem key={item.id} item={item} />
                    ),
                )}
              </ul>
            </div>
            <Summary  />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
