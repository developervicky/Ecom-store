"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface MainNavProps {
  data: CategoryType[];
  className?: string;
}
const MainNav: FC<MainNavProps> = ({ data, className }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav
      className={cn(
        "mx-6 mt-0.5 flex items-center space-x-4 lg:space-x-6",
        className,
      )}
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium hover:text-foreground",
            route.active ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
