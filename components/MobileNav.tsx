"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Button from "./ui/button";
import { FC } from "react";

interface MobileNavProps {
  data: CategoryType[];
}

const MobileNav: FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname();
  const params = useParams();

  const { storeId } = params;

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="items-start bg-transparent pl-0 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
            <Menu className="h-6 w-6 text-black " />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] lg:hidden">
          <SheetHeader>
            <SheetTitle className="text-left font-semibold tracking-tight ">
              Ecom.
            </SheetTitle>
          </SheetHeader>
          <nav className="!mt-10 ml-3 flex flex-col items-start space-y-4">
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground",
                )}
              >
                <SheetClose>{route.label}</SheetClose>
              </Link>
            ))}
          </nav>
          <SheetFooter className="absolute bottom-4 right-4 text-muted-foreground">
            The place for buyers 🙏
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
