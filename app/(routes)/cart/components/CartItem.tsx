"use client";
import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import useCart from "@/hooks/use-cart";
import { Minus, Plus, Trash, X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface CartItemProps {
  item: ProductType;
}
const CartItem: FC<CartItemProps> = ({ item }) => {
  const cart = useCart();

  const onRemoveAll = () => {
    cart.removeAll();
  };

  const onRemoveItem = () => {
    cart.removeItem(item.id);
  };

  const onRemoveItems = () => {
    cart.removeItems(item.id);
  };

  const onAddItem = () => {
    cart.addItem(item);
  };

  return (
    <div>
      <li className="flex justify-between border-b py-6">
        <div className="flex ">
          <div className="relative my-auto h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
            <Image
              fill
              src={item.images[0].url}
              alt="prod_img"
              className="object-cover object-center"
            />
          </div>
          <div className="relative ml-4 flex justify-between sm:ml-6">
            <div className="flex w-full max-w-[15rem] flex-col justify-between gap-2">
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-black">{item.name}</p>
                <Currency value={item.price} className="" />
              </div>
              <div className="mb-2 flex flex-col gap-1">
                <p className="text-gray-500">Brand: {item.brand.name}</p>
                <p className="text-gray-500">Color: {item.color.name}</p>
                <p className="text-gray-500">Size: {item.size.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex gap-2">
            <div className=" flex items-center justify-center gap-3 rounded-full border bg-white p-1 shadow-md sm:p-2 ">
              <IconButton
                icon={<Minus size={15} className="group-hover:text-red-500" />}
                onClick={onRemoveItem}
              />
              <p className="font-semibold ">{item.cartCount}</p>
              <IconButton
                icon={<Plus size={15} className="group-hover:text-green-600" />}
                onClick={onAddItem}
              />
            </div>
            <IconButton
              icon={
                <Trash
                  size={15}
                  className="mx-1 group-hover:text-red-500 sm:mx-2"
                />
              }
              onClick={onRemoveItems}
            />
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
