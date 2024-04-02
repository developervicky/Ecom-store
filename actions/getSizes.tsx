const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<SizeType[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  return res.json();
};

export default getSizes;
