import ProductCard, { Product } from "@/components/Cards/ProductCard";


const toBn = (num: number | string): string => {
  return num
    .toString()
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)]);
};
const getProductData = async (): Promise<Product[]> => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return [];
  }
};

const ProductPage = async () => {
  const data = await getProductData();
  return (
    <div className="max-w-7xl mx-auto m-5">
      {/* 3. All Products */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">সব পণ্য</h2>
          <p className="text-xs text-gray-500 mt-1 font-medium">
            মোট {toBn(data.length)}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((x) => (
            <ProductCard key={x.id} product={x} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
