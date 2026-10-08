import React from "react";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface ProductDetails {
  id: number | string;
  nameBn: string;
  categoryNameBn?: string;
  categoryIcon?: string;
  image?: string;
  unit: string;
  today: number;
  yesterday: number;
  change?: {
    dir: "up" | "down" | "none" | string;
    pct: number;
  };
}

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
  return unitMap[unit?.toLowerCase()] || unit || "কেজি";
};

const Marquee = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );

  const data: ProductDetails[] = await response.json();

  return (
    <div className="w-full bg-white border-y border-gray-100 py-2.5 shadow-2xs overflow-hidden">
      <MarqueeText direction="right" duration={50}>
        <div className="flex items-center gap-2 pr-3">
          {data.map((e) => {
            const isUp = e.change?.dir === "up";
            const isDown = e.change?.dir === "down";

            return (
              <Link
                key={e.id}
                href={`/details/${e.id}`}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-gray-50/80 hover:bg-emerald-50/60 border border-gray-100 hover:border-emerald-200 rounded-full transition-all text-sm shrink-0 whitespace-nowrap cursor-pointer group"
              >
                {/* Category Icon */}
                {e.categoryIcon && (
                  <span className="text-base group-hover:scale-110 transition-transform">
                    {e.categoryIcon}
                  </span>
                )}

                {/* Product Name */}
                <span className="font-bold text-gray-800 group-hover:text-[#008a4c] transition-colors">
                  {e.nameBn}
                </span>

                {/* Price & Unit */}
                <span className="font-semibold text-gray-900 ">
                  ৳{toBn(e.today)} 
                  <span className="text-xs font-normal text-gray-500 ml-0.5">
                    টাকা/{getUnitBn(e.unit)}
                  </span>
                </span>

                {/* Percentage Change Badge */}
                <div
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border ${
                    isUp
                      ? "bg-red-50 text-red-600 border-red-100"
                      : isDown
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                        : "bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  <span className="text-[10px]">
                    {isUp ? "▲" : isDown ? "▼" : "—"}
                  </span>
                  <span>
                    {toBn(e.change?.pct ? e.change.pct.toFixed(1) : 0)}%
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
