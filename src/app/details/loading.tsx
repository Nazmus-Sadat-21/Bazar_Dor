import React from "react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-pulse">
      
      {/* 1. Top Product Header Card Skeleton */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Left Side: Icon & Titles */}
        <div className="flex items-start gap-4">
          {/* Icon Box */}
          <div className="w-16 h-16 bg-gray-200 rounded-2xl shrink-0" />
          
          {/* Text Placeholders */}
          <div className="space-y-2.5 pt-0.5">
            <div className="h-7 w-48 sm:w-64 bg-gray-200 rounded-lg" />
            <div className="h-4 w-32 bg-gray-200 rounded-md" />
            <div className="h-4 w-56 sm:w-72 bg-gray-200 rounded-md mt-1" />
          </div>
        </div>

        {/* Right Side: Price Box */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center min-w-[150px] shrink-0 space-y-2">
          <div className="h-3 w-16 bg-gray-200 rounded-md" />
          <div className="h-8 w-20 bg-gray-300 rounded-lg my-0.5" />
          <div className="h-3 w-20 bg-gray-200 rounded-md" />
          <div className="h-6 w-16 bg-gray-200 rounded-md mt-1" />
        </div>
      </div>

      {/* 2. Main Details Card Skeleton */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-8">
        
        {/* Section 1: Price Summary Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-40 bg-gray-200 rounded-md" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 space-y-3"
              >
                <div className="h-3 w-20 bg-gray-200 rounded-md" />
                <div className="h-7 w-28 bg-gray-300 rounded-lg" />
                <div className="h-3 w-36 bg-gray-200 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Market Table Skeleton */}
        <div className="space-y-4 pt-2">
          <div className="h-6 w-52 bg-gray-200 rounded-md" />

          <div className="overflow-x-auto rounded-xl border border-gray-100">
            {/* Header Row */}
            <div className="bg-gray-50 p-4 border-b border-gray-100 grid grid-cols-5 gap-4">
              <div className="h-4 bg-gray-200 rounded-md w-20" />
              <div className="h-4 bg-gray-200 rounded-md w-16" />
              <div className="h-4 bg-gray-200 rounded-md w-16" />
              <div className="h-4 bg-gray-200 rounded-md w-16" />
              <div className="h-4 bg-gray-200 rounded-md w-12" />
            </div>

            {/* Skeleton Rows */}
            {[1, 2, 3, 4, 5].map((row) => (
              <div
                key={row}
                className="p-4 border-b border-gray-100 grid grid-cols-5 gap-4 items-center"
              >
                <div className="h-4 bg-gray-200 rounded-md w-28" />
                <div className="h-4 bg-gray-100 rounded-md w-16" />
                <div className="h-4 bg-gray-100 rounded-md w-20" />
                <div className="h-4 bg-gray-100 rounded-md w-20" />
                <div className="h-4 bg-gray-200 rounded-md w-20" />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}