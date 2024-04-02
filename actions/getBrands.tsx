const URL = `${process.env.NEXT_PUBLIC_API_URL}/brands`;

const getBrands = async (): Promise<BrandType[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  return res.json();
};

export default getBrands;
