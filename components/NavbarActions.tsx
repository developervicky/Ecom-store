"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  //   to avoid hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="bg-transparent px-4 py-2 text-sm text-black">
        <Link href={"https://ecom--admin.vercel.app/"}>Admin</Link>
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.totalCount}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
