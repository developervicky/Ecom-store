import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  brandId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<ProductType[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      brandId: query.brandId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url, { cache: "no-store" });

  return res.json();
};

export default getProducts;
