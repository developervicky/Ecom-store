const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<ColorType[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  return res.json();
};

export default getColors;
