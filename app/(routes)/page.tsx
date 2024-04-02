import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

const Home = async () => {
  const products = await getProducts({
    isFeatured: true,
  });
  const data = await getBillboard("cluegz7280002lm2e87ec0zxe");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={data} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
