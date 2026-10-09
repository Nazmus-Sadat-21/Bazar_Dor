import CategoryProductList from "@/components/Cards/CategoryProductList";
import { notFound } from "next/navigation";


interface PageProps {
  params: Promise<{ CategoryID: string }>;
}

const page = async ({ params }: PageProps) => {
  const { CategoryID } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${CategoryID}`,
  );
  const data = await response.json();
  
  if(!data){
    notFound()
  }

  return (
    
    <div>
      <CategoryProductList products={data} />
    </div>
  );
};

export default page;
