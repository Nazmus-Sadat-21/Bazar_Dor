import React from "react";
import Link from "next/link";

// Helper function to convert English digits to Bengali
const toBn = (num: number | string): string => {
  if (num === undefined || num === null) return "";
  return num
    .toString()
    .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit, 10)]);
};

// Helper function to translate unit keys to Bengali
const getUnitBn = (unit: string): string => {
  const unitMap: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    liter: "লিটার",
    piece: "টি",
    dozen: "ডজন",
    gram: "গ্রাম",
  };
  return unitMap[unit?.toLowerCase()] || unit;
};

export interface Product {
  id: number | string;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "none" | string;
    pct: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <>
      <Link href={`/details/${product.id}`}>
        <div className="cursor-pointer bg-white rounded-2xl p-4 border border-gray-200 shadow-xs hover:shadow-md hover:border-emerald-600 transition-shadow flex flex-col justify-between">
          {/* Top Header Section */}

          <div className="flex items-center gap-3">
            {/* Product Emoji/Image Icon */}
            <div className="w-12 h-12 bg-orange-50/60 rounded-2xl flex items-center justify-center text-2xl shrink-0">
              {product.image}
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-base leading-snug">
                {product.nameBn}
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                প্রতি {getUnitBn(product.unit)}
              </p>
            </div>
          </div>

          {/* Bottom Price & Percentage Section */}
          <div className="flex items-end justify-between mt-4">
            <div>
              <span className="text-[11px] text-gray-400 block font-medium">
                আজকের দাম
              </span>
              <span className="text-lg font-bold text-gray-900">
                {toBn(product.today)} টাকা
              </span>
            </div>

            {/* Change Percentage Badge */}
            <div
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md ${
                isUp
                  ? "bg-red-50 text-red-600"
                  : isDown
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>
              <span>{toBn(product.change?.pct?.toFixed(1) || 0)}%</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
