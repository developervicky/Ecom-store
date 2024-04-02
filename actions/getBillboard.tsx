const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<BillboardType> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-store" });

  return res.json();
};

export default getBillboard;
