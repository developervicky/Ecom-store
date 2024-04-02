"use client";
import { FC } from "react";
import Currency from "./ui/Currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
interface InfoProps {
  product: ProductType;
}
const Info: FC<InfoProps> = ({ product }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(product);
  };
  const {
    brand,
    category,
    color,
    id,
    images,
    isFeatured,
    name,
    price,
    size,
    description,
  } = product;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Brand:</h3>
          <p>{brand.name}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Size:</h3>
          <p>{size.value}</p>
        </div>
        <div className="flex items-center gap-x-2 ">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: color?.value }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black">About the product:</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
