import React from "react";
import Link from "next/link";

import MainNav from "./MainNav";
import Container from "./ui/Container";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <MobileNav data={categories} />
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <h1 className="text-xl font-semibold tracking-tight">Ecom.</h1>
          </Link>
          <MainNav data={categories} className="hidden lg:flex" />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
