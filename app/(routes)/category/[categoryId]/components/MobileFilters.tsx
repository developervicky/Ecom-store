"use client";
import IconButton from "@/components/ui/IconButton";
import Button from "@/components/ui/button";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import Filter from "./Filter";

interface MobileFiltersProps {
  sizes: SizeType[];
  colors: ColorType[];
  brands: BrandType[];
}
const MobileFilters: FC<MobileFiltersProps> = ({ brands, colors, sizes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter valueKey="brandId" name="Brands" data={brands} />
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
