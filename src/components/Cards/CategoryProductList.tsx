"use client";

import React, { useState } from "react";
import ProductCard, { Product } from "@/components/Cards/ProductCard";
import { ChevronDown } from "lucide-react";

// Converts numbers to Bengali numerals
const toBn = (num: number | string): string => {
  if (num === undefined || num === null) return "";
  return num
    .toString()
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)]);
};

interface CategoryProductListProps {
  products: Product[];
}

type SortOption = "default" | "low-to-high" | "high-to-low";

export default function CategoryProductList({
  products,
}: CategoryProductListProps) {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  // Get category icon and name from the first product with fallbacks
  const categoryNameBn = products[0]?.categoryNameBn;
  const categoryIcon = products[0]?.categoryIcon;

  // Numeric sorting based on price

  const sortedList = (Data: Product[]) => {
    const list = [...Data];

    if (sortBy === "low-to-high") {
      list.sort((a, b) => Number(a.today) - Number(b.today));
    } else if (sortBy === "high-to-low") {
      list.sort((a, b) => Number(b.today) - Number(a.today));
    }

    return list;
  };

  const newSortedList = sortedList(products);
  console.log(newSortedList);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* 1. Category Header Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4 shadow-xs">
        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl shrink-0">
          {categoryIcon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            {categoryNameBn}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5 font-medium">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* 2. Sort Dropdown Bar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 flex justify-end items-center shadow-xs">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-600">সাজান</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => {
                console.log("selected:", e.target.value);
                setSortBy(e.target.value as SortOption);
              }}
              className="appearance-none bg-gray-50 border border-gray-200 text-gray-800 text-sm font-semibold rounded-xl px-4 py-2 pr-9 focus:outline-none focus:border-[#008a4c] cursor-pointer"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low-to-high">দাম: কম থেকে বেশি</option>
              <option value="high-to-low">দাম: বেশি থেকে কম</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Count Display */}
      <p className="text-sm font-semibold text-gray-600">
        মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* 4. Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newSortedList.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}
