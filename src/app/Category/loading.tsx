import React from "react";

export default function CategoryLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-pulse">
      
      {/* 1. Category Header Card Skeleton */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-4 shadow-xs">
        {/* Icon Placeholder */}
        <div className="w-14 h-14 bg-gray-200 rounded-2xl shrink-0" />
        
        {/* Text Placeholders */}
        <div className="space-y-2 flex-1">
          <div className="h-7 w-36 sm:w-48 bg-gray-200 rounded-lg" />
          <div className="h-4 w-48 sm:w-64 bg-gray-200 rounded-md" />
        </div>
      </div>

      {/* 2. Sort Dropdown Bar Skeleton */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 flex justify-end items-center shadow-xs">
        <div className="flex items-center gap-3">
          <div className="h-4 w-12 bg-gray-200 rounded-md" />
          <div className="h-9 w-32 bg-gray-200 rounded-xl" />
        </div>
      </div>

      {/* 3. Items Count Display Skeleton */}
      <div className="h-4 w-40 bg-gray-200 rounded-md" />

      {/* 4. Product Cards Grid Skeleton (3-Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 space-y-4 shadow-xs flex flex-col justify-between"
          >
            {/* Top: Icon + Title + Unit */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-2xl shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-5 w-3/4 bg-gray-200 rounded-md" />
                <div className="h-3.5 w-1/3 bg-gray-200 rounded-md" />
              </div>
            </div>

            {/* Bottom: Today's Price + Badge */}
            <div className="flex items-end justify-between pt-2 border-t border-gray-50">
              <div className="space-y-1.5">
                <div className="h-3 w-16 bg-gray-200 rounded-md" />
                <div className="h-7 w-24 bg-gray-300 rounded-md" />
              </div>
              <div className="h-6 w-16 bg-gray-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}