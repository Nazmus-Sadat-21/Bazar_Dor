import CategoryProductList from "@/components/Cards/CategoryProductList";


interface PageProps {
  params: Promise<{ CategoryID: string }>;
}

const page = async ({ params }: PageProps) => {
  const { CategoryID } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${CategoryID}`
  );
  const data = await response.json();

  return <CategoryProductList products={data} />;
};

export default page;