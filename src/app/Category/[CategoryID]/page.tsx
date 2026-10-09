import CategoryProductList from "@/components/Cards/CategoryProductList";


interface PageProps {
  params: Promise<{ CategoryID: string }>;
}

const page = async ({ params }: PageProps) => {
  const { CategoryID } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${CategoryID}`,
  );
  const data = await response.json();

  return (
    <div>
      <CategoryProductList products={data} />
    </div>
  );
};

export default page;
