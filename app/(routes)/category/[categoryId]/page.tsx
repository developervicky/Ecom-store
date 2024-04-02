import getBrands from "@/actions/getBrands";
import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/Billboard";
import { FC } from "react";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./components/MobileFilters";
import Container from "@/components/ui/Container";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    brandId: string;
  };
}
const CategoryPage: FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = params;
  const { colorId, sizeId, brandId } = searchParams;
  const products = await getProducts({
    categoryId,
    colorId,
    brandId,
    sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const brands = await getBrands();
  const category = await getCategory(categoryId);

  return (
    <Container>
      <div className="bg-white">
        <Billboard data={category.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Mobile filters */}
            <MobileFilters sizes={sizes} colors={colors} brands={brands} />
            <div className="hidden lg:block">
              <Filter valueKey="brandId" name="Brands" data={brands} />
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
