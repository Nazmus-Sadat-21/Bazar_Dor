// 

import React from "react";
import ProductCard, { Product } from "../Cards/ProductCard";

// Helper to convert numbers to Bengali
const toBn = (num: number | string): string => {
  return num
    .toString()
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)]);
};

const getProductData = async (): Promise<Product[]> => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/products",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch product data:", error);
    return [];
  }
};

const Products = async () => {
  const data = await getProductData();

  // 1. Filter and sort highest price rise first (pct descending)
  const priceIncreased = data
    .filter((e) => e.change?.dir === "up")
    .sort((a, b) => (b.change?.pct || 0) - (a.change?.pct || 0)).slice(0,6);

  // 2. Filter and sort highest price drop first (pct descending)
  const priceDecreased = data
    .filter((e) => e.change?.dir === "down")
    .sort((a, b) => (a.change?.pct || 0) - (b.change?.pct || 0)).slice(0,6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 1. Today Price Increased */}
      {priceIncreased.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-red-500 text-sm">▲</span> আজ দাম বেড়েছে
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {priceIncreased.map((x) => (
              <ProductCard key={x.id} product={x} />
            ))}
          </div>
        </section>
      )}

      {/* 2. Today Price Decreased */}
      {priceDecreased.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-emerald-500 text-sm">▼</span> আজ দাম কমেছে
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {priceDecreased.map((x) => (
              <ProductCard key={x.id} product={x} />
            ))}
          </div>
        </section>
      )}

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

export default Products;