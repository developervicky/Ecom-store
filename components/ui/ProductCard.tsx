"use client";

import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(product);
  };
  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          alt="product_image"
          src={product?.images?.[0]?.url}
          className="aspect-square rounded-md object-cover"
          fill
          priority={true}
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      <div className="item-center flex justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
