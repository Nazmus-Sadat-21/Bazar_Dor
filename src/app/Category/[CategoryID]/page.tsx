import CategoryProductList from "@/components/Cards/CategoryProductList";
import { notFound } from "next/navigation";


interface PageProps {
  params: Promise<{ CategoryID: string }>;
}

const page = async ({ params }: PageProps) => {
  const { CategoryID } = await params;


  
  let data:[] = []
   try {
    const response = await fetch(
      `https://api.api-store.workers.dev/api/bazardor/products?category=${CategoryID}`, { next: { revalidate: 3600 } }
    );
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch product details:", error);
  }
  
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
