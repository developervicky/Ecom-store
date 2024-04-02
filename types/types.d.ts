interface BillboardType {
  id: string;
  label: string;
  imageUrl: String;
}

interface CategoryType {
  id: string;
  name: string;
  billboard: BillboardType;
}

interface ProductType {
  id: string;
  name: string;
  price: string;
  description: string;
  isFeatured: boolean;
  cartCount?: number;
  category: CategoryType;
  size: SizeType;
  color: ColorType;
  brand: BrandType;
  images: ImageType[];
}

interface SizeType {
  id: string;
  name: string;
  value: string;
}

interface ImageType {
  id: string;
  url: string;
}

interface ColorType {
  id: string;
  name: string;
  value: string;
}

interface BrandType {
  id: string;
  name: string;
}
