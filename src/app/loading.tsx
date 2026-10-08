import React from "react";

export default function GlobalLoading() {
  return (
    <div className="w-full min-h-screen bg-[#f8faf9] py-6 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. Universal Top Hero / Banner Skeleton */}
        <div className="bg-white/80 rounded-3xl p-6 sm:p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex-1 space-y-4 w-full">
            {/* Date Badge Placeholder */}
            <div className="h-7 w-36 bg-gray-200 rounded-full" />
            {/* Title Placeholder */}
            <div className="h-9 sm:h-10 w-3/4 bg-gray-200 rounded-xl" />
            {/* Description Placeholder */}
            <div className="space-y-2 max-w-xl">
              <div className="h-4 w-full bg-gray-200 rounded-md" />
              <div className="h-4 w-4/5 bg-gray-200 rounded-md" />
            </div>
            {/* CTA Button Placeholder */}
            <div className="pt-2">
              <div className="h-10 w-32 bg-gray-200 rounded-xl" />
            </div>
          </div>
          {/* Banner Graphic Placeholder */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 bg-gray-200 rounded-3xl shrink-0" />
        </div>

        {/* 2. Category Nav Pills Skeleton */}
        <div className="flex items-center gap-3 overflow-x-auto py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="h-10 w-24 sm:w-28 bg-white border border-gray-100 rounded-xl shrink-0"
            />
          ))}
        </div>

        {/* 3. Product Section & 3-Column Grid Skeleton */}
        <div className="space-y-4">
          {/* Section Heading Placeholder */}
          <div className="h-7 w-48 bg-gray-200 rounded-lg" />

          {/* Product Cards Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 border border-gray-100 flex flex-col justify-between space-y-4 shadow-xs"
              >
                {/* Header: Icon + Title + Unit */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-2xl shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-2/3 bg-gray-200 rounded-md" />
                    <div className="h-3 w-1/3 bg-gray-200 rounded-md" />
                  </div>
                </div>

                {/* Bottom: Price + Badge Placeholder */}
                <div className="flex items-end justify-between pt-2">
                  <div className="space-y-1.5">
                    <div className="h-3 w-16 bg-gray-200 rounded-md" />
                    <div className="h-6 w-24 bg-gray-300 rounded-md" />
                  </div>
                  <div className="h-6 w-16 bg-gray-200 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}