import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Helper function to convert English digits to Bengali numerals
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

interface MarketData {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface ProductDetails {
  id: number | string;
  nameBn: string;
  category: string;
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

  markets?: MarketData[];
}

interface PageProps {
  params: Promise<{ ID: string }>;
}

const page = async ({ params }: PageProps) => {
  const { ID } = await params;

  let data: ProductDetails | null = null;

  try {
    const response = await fetch(
      `https://api.api-store.workers.dev/api/bazardor/products/${ID}`, { next: { revalidate: 3600 } }
    );
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch product details:", error);
  }

  if (!data) {
    notFound()
  }

  const diffAmount = Math.abs(data.today - data.yesterday);
  const isUp = data.change?.dir === "up";
  const isDown = data.change?.dir === "down";

  const markets = data?.markets ?? [];
  const allMins = markets.map((m) => m.min);
  const allMaxs = markets.map((m) => m.max);

  const realMinPrice = Math.min(...allMins);
  const realMaxPrice = Math.max(...allMaxs);
  const realAvgPrice = Math.round(
    markets.length
      ? markets.reduce((acc, m) => acc + (m.min + m.max) / 2, 0) /
          markets.length
      : data.today,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <p className=" flex gap-2 text-gray-600">
        <Link href="/">হোম</Link> {">"}{" "}
        <Link href={`/Category/${data.category}`}>{data.categoryNameBn}</Link>{" "}
        {">"} <Link href={`/details/${data.id}`}>{data.nameBn}</Link>
      </p>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-red-50/80 rounded-2xl flex items-center justify-center text-3xl shrink-0">
            {data.image || data.categoryIcon}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {data.nameBn}
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
              প্রতি {getUnitBn(data.unit)} • {data.categoryNameBn}
            </p>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              গতকালকের তুলনায় আজ দাম{" "}
              <span
                className={
                  isUp
                    ? "font-bold text-red-500"
                    : isDown
                      ? "font-bold text-emerald-600"
                      : "font-bold text-gray-700"
                }
              >
                {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "পরিবর্তন হয়নি"}
              </span>
              {diffAmount > 0 && ` • ${toBn(diffAmount)} টাকা`}
            </p>
          </div>
        </div>

        <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center min-w-[150px] shrink-0">
          <span className="text-xs text-gray-500 font-medium">আজকের দাম</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 my-1">
            {toBn(data.today)}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            টাকা / {getUnitBn(data.unit)}
          </span>
          {data.change && (
            <div
              className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md mt-2 ${
                isUp
                  ? "bg-red-50 text-red-600"
                  : isDown
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>
              <span>{toBn(Math.abs(data.change.pct).toFixed(1))}%</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">দামের সারসংক্ষেপ</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50/60 border border-gray-100 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">
                সর্বনিম্ন দাম
              </span>
              <div className="text-2xl font-bold text-emerald-600">
                {toBn(realMinPrice)} টাকা
              </div>
              <span className="text-xs text-gray-400 block font-medium">
                সবচেয়ে কম দামের বাজার
              </span>
            </div>

            {/* Maximum Price */}
            <div className="bg-gray-50/60 border border-gray-100 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">
                সর্বাধিক দাম
              </span>
              <div className="text-2xl font-bold text-red-500">
                {toBn(realMaxPrice)} টাকা
              </div>
              <span className="text-xs text-gray-400 block font-medium">
                সবচেয়ে বেশি দামের বাজার
              </span>
            </div>

            <div className="bg-gray-50/60 border border-gray-100 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-gray-500 font-medium block">
                গড় দাম
              </span>
              <div className="text-2xl font-bold text-emerald-600">
                {toBn(realAvgPrice)} টাকা
              </div>
              <span className="text-xs text-gray-400 block font-medium">
                প্রতি {getUnitBn(data.unit)}-এর হিসাবে
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h2 className="text-xl font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100 text-xs font-semibold text-gray-600">
                  <th className="py-3 px-4">বাজার</th>
                  <th className="py-3 px-4">বিভাগ</th>
                  <th className="py-3 px-4">সর্বনিম্ন</th>
                  <th className="py-3 px-4">সর্বাধিক</th>
                  <th className="py-3 px-4">গড়</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-medium text-gray-800">
                {data?.markets?.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      {item.market}
                    </td>
                    <td className="py-4 px-4 text-gray-600">{item.division}</td>
                    <td className="py-4 px-4 text-gray-700">
                      {toBn(item.min)} টাকা
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {toBn(item.max)} টাকা
                    </td>
                    <td className="py-4 px-4 font-bold text-gray-900">
                      {toBn((item.min + item.max) / 2)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
